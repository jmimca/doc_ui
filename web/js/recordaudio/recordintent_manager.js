const { ipcRenderer } = require('electron');


/** 
 * Audio Recorder class 
 * @param toWavdownsamplerScript - worker script to convert to wav with downsampling
 * @param outputSampleRate - desired sample rate
 * @param OnUserStartSpeaking - callback for when user starts speaking 
 * @param OnUserStoppedSpeaking - callback for when user stops speaking
 */
AudioRecorder = (function(toWavdownsamplerScript, outputSampleRate, OnUserStartSpeaking = _=>{}, OnUserStoppedSpeaking = _=>{}) { 


    // control variables
    let isListening = false;

    // audio processing WebAPI
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    var audioSource;

    // audinode for PCM16 conversion with downsampling
    const WAVConvNode = audioContext.createScriptProcessor(4096, 1, 1);

    // Silence Detection Settings
    analyser.minDecibels; //= mindecibels;
    let silence_delay; // =  silencedelay;
    let silence_start = performance.now();
    let is_speaking = false; // trigger only once per silence event

    // Reusable Data storage
    const freqdata = new Uint8Array(analyser.frequencyBinCount); // to store frequency data from analyser
    var audiochunks = [];

    // sample rate of stream
    var inputSampleRate;

    // BG Workers
    let toWavdownsampler;

    /*
    * To detect Silence in audio stream.
    * Uses silence_delay and mindecibels to detect silence
    */
    SilenceDetector = function(time) {
        requestAnimationFrame(SilenceDetector); // loop every 60th of a second to check
        analyser.getByteFrequencyData(freqdata); // get current data

        // if there is data above the given db limit
        if (freqdata.some(v => v)) {

            // check user was not already talking but audio data from user is required (mic isListening)
            if (!is_speaking && isListening) { 
                is_speaking = true;
                console.log(' Speech detected ');
            }

            // Update silence start time to now
            silence_start = time; 
        }

        // check if user was speaking and now there is silence for more than silence_delay (time)
        if (is_speaking && time - silence_start > silence_delay) {
            homepageui.hideMicListener();
            // check if audio chunks is not empty
            if (audiochunks.length) {
                const recording = new Blob(audiochunks);
                let auddata = (async () => {
                    return await recording.arrayBuffer();
                });

                // send data to detect user intent
                recording.arrayBuffer()
                    .then(
                        buffer => {
                            ipcRenderer.send('intentDetectAudio', buffer, outputSampleRate)
                        }
                    );
                audiochunks = [];
            }

            isListening = false;
            OnUserStoppedSpeaking();
            is_speaking = false;
            console.log('paused recoding');
        }

    }

    /** 
    * Initialise Audio Recorder instance 
    * @param {number=} silencedelay - silence time after which recording is halted
    * @param {number=} mindecibels - minimum decibel value to consider speech
    */
    init = function(silencedelay = 700, mindecibels = -55) {
        analyser.minDecibels = mindecibels;
        silence_delay = silencedelay;
        self.navigator.mediaDevices.getUserMedia({
                audio: true
            })
            .then(stream => {
                audioSource = audioContext.createMediaStreamSource(stream);
                audioSource.connect(analyser);

                inputSampleRate = audioSource.context.sampleRate; // sample rate of mic input
                console.log(inputSampleRate);

                WAVConvNode.onaudioprocess = function(e) {
                    if (!isListening) {
                        return;
                    }
                    toWavdownsampler.postMessage({
                        command: "wavdownsample",
                        inputFrame: e.inputBuffer.getChannelData(0)
                    });
                };

                analyser.connect(WAVConvNode);
                WAVConvNode.connect(audioContext.destination);

                toWavdownsampler = new Worker(toWavdownsamplerScript);
                toWavdownsampler.postMessage({
                    command: "init",
                    inputSampleRate: inputSampleRate, // audio source input SR
                    outputSampleRate: outputSampleRate // desired output SR
                });

                toWavdownsampler.onmessage = function(e) {

                    audiochunks.push(e.data);
                };

                SilenceDetector(); // started silence detector loop

            }).catch(console.error);
    }

    /**
     * Record One utterance (sentence)
     */
    recordUtterence = function() {
        if (isListening) {
            console.log("Already Listening!!!!!!!");
            return;
        }
        audiochunks = [];
        OnUserStartSpeaking();
        isListening = true;
        homepageui.showMicListener();
        console.log("Speak Now");
    }

    setOutputSampleRate = function(outputSampleRate){
        toWavdownsampler.postMessage({
            command: "setOutputSampleRate",
            outputSampleRate: outputSampleRate // desired output SR
        });
    }

    return {
        init: init,
        recordUtterence: recordUtterence,
        setOutputSampleRate: setOutputSampleRate
    }
});