  
const electron = require('electron')
const {
    app,
    BrowserWindow,
    ipcMain
} = electron;
var IntentDetect = require('./utils/intentdetect.js')
const { allSkills, register_script } = require("./register-skill");



let mainWindow;
let dgflow;
let webcontent;

app.on('ready', function() {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('web/index.html');
    dgflow = new IntentDetect();
    webcontents = mainWindow.webContents;
});

ipcMain.on("intentDetectText", async (event, text) => {
    response = await dgflow.detectTextIntent(text);
    handle_action(response);
});


ipcMain.on("intentDetectAudio", async (event, audiodata, sampleRateHertz) => {
    var buff = Buffer.from(audiodata);
    response = await dgflow.detectAudioIntent(buff, sampleRateHertz);
    handle_action(response, isAudio=true);
});


async function handle_action(response, isAudio=false){
    action = response.queryResult.action.split('.')[0];
    try{
        allSkills[action].forEach(skillFunction => {
            // calling skill function with fullfullment callback
            skillFunction(response, temp_intent_fulfilment_action, isAudio);
        });
    }catch(err){
        console.log(err);
        console.log(response);
        temp_intent_fulfilment_action(
            {
                userText: isaudio ? response.queryResult.queryText : null,
                botText: encoder.encode(botoutputtext),
                outputAudio: response.outputAudio,
                stt: {
                    text: encoder.encode('Sorry, request coud not match intent to a skill.'),
                    lang: 'en'
                }
            }
        );
    }

}


// One fulfilment class to be created later to handle 
function temp_intent_fulfilment_action(skillAction){   
    webcontents.send('newTempfullfillment', skillAction);
}

