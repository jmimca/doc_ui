const { ipcRenderer } = require('electron');


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



AudioRecorder = (function(toWavdownsamplerScript, outputSampleRate, OnUserStartSpeaking = _=>{}, OnUserStoppedSpeaking = _=>{}) { //silencedelay = 1500, mindecibels = -55) {


    // control variables
    let isListening = false;

    // audio processing WebAPI
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const WAVConvNode = audioContext.createScriptProcessor(4096, 1, 1);
    var audioSource;

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

    SilenceDetector = function(time) {
        requestAnimationFrame(SilenceDetector); // loop every 60th of a second to check
        analyser.getByteFrequencyData(freqdata); // get current data

        // if there is data above the given db limit
        if (freqdata.some(v => v)) {
            if (!is_speaking && isListening) { // check if already listening
                is_speaking = true;
                // OnUserSpeaking();
                console.log(' Speech detected ');
            }
            silence_start = time; // Update silence start time to now
        }

        if (is_speaking && time - silence_start > silence_delay) {
            homepageui.hideMicListener();
            if (audiochunks.length) {
                const recording = new Blob(audiochunks);
                let auddata = (async () => {
                    return await recording.arrayBuffer();
                });
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
                    //audiochunks.push(output);
                    //console.log(typeof(output));

                    //audiochunks.write(new Uint8Array(data_16.buffer, data_16.byteOffset, data_16.byteLength));
                    //let aud = new Uint8Array(output.buffer, output.byteOffset, output.byteLength)
                    //console.log(aud);
                    //ipcRenderer.send('streamdatarec', {data:output.buffer, isend:false}); 
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

    recordUtterence = function() {
        if (isListening) {
            console.log("Already Listening!!!!!!!");
            return;
        }
        audiochunks = [];
        //audiochunks = new IPCStream('audioStreamData');
        //ipcRenderer.send('streamspeechinit', true) ;
        sleep(1500);
        OnUserStartSpeaking();
        isListening = true;
        homepageui.showMicListener();
        console.log("Speak Now");


    }

    return {
        init: init,
        recordUtterence: recordUtterence
    }
});