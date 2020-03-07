const electron = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function(){
    
    mainWindow = new BrowserWindow({webPreferences: 
        {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('web/index.html');
});

// this is sahil. testing git



