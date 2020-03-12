const electron = require('electron')
const {
    app,
    BrowserWindow,
    ipcMain
} = electron;
var IntentDetect = require('./utils/intentdetect.js')


let mainWindow;
let dgflow;

app.on('ready', function() {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('web/index.html');
    dgflow = new IntentDetect();
});

ipcMain.on("intentDetectText", async (event, text) => {
    response = await dgflow.detectTextIntent(text);
    forUIUpdate = {
        botText: response.queryResult.fulfillmentText,
        userText: null,
        outputAudio: response.outputAudio,
    };
    // TODO Handle user Intent

    event.sender.send("fullfillmentText",forUIUpdate);
    //console.log(response);
});


ipcMain.on("intentDetectAudio", async (event, audiodata, sampleRateHertz) => {
    var buff = Buffer.from(audiodata)
    response = await dgflow.detectAudioIntent(buff, sampleRateHertz);
    forUIUpdate = {
        botText: response.queryResult.fulfillmentText,
        userText: response.queryResult.queryText,
        outputAudio: response.outputAudio,
    };
    // TODO Handle user Intent

    event.sender.send("fullfillmentText", forUIUpdate);
    //console.log(response);
});