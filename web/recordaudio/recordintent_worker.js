onmessage = function(e) {
    switch (e.data.command) {
        case "init":
            init(e.data.inputSampleRate, e.data.outputSampleRate);
            break;
        case "wavdownsample":
            wavdownsample(e.data.inputFrame);
            break;
        case "setOutputSampleRate":
            setOutputSampleRate(e.data.outputSampleRate);
            break;
    }
};

let inputSR;
let outputSR;

function init(inputSampleRate, outputSampleRate) {
    inputSR = inputSampleRate;
    outputSR = outputSampleRate;
}

function wavdownsample(inputData) {
    // if downsampling required
    var outputData;
    if (inputSR > outputSR) {
        var sampleRateRatio = inputSR / outputSR;
        var newLength = Math.round(inputData.length / sampleRateRatio);
        outputData = new Uint16Array(newLength);
        var offsetResult = 0;
        var offsetBuffer = 0;
        while (offsetResult < outputData.length) {
            var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
            // Use average value of skipped samples
            var accum = 0,
                count = 0;
            for (var i = offsetBuffer; i < nextOffsetBuffer && i < inputData.length; i++) {
                accum += inputData[i];
                count++;
            }
            let s = Math.max(-1, Math.min(1, accum / count)); // should be in range (-1, 1)
            outputData[offsetResult] = s < 0 ? s * 0x8000 : s * 0x7FFF; // from float32 to Int16
            offsetResult++;
            offsetBuffer = nextOffsetBuffer;
        }
    } else {
        outputData = new Uint16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
            let s = Math.max(-1, Math.min(1, inputData[i])); // should be in range (-1, 1)
            output[i] = s < 0 ? s * 0x8000 : s * 0x7FFF; // from float32 to Int16
        }
    }
    postMessage(outputData);
}


function setOutputSampleRate(outputSampleRate) {
    outputSR = outputSampleRate;
}