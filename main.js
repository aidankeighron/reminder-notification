const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const mainWindow = new BrowserWindow({
      width: 400,
      height: 400,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be'
      },
      webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'schedule.js')
      }
    });
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);
app.on('ready', () => app.setAppUserModelId("reminder-notification"));
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
  
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
});