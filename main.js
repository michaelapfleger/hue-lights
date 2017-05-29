const { app, globalShortcut, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const showDevTools = true;

let win;


function createWindow() {
  win = new BrowserWindow({
    width: showDevTools ? 1000 : 400,
    height: 600,
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'public', 'index.html'),
    protocol: 'file',
    slashes: true,
  }));

  if (showDevTools) {
    win.webContents.openDevTools();
  }
  win.on('closed', () => {
    win = null;
  });
}


app.on('ready', () => {
  console.log('ready');
  createWindow();
  globalShortcut.register('VolumeUp', () => win.webContents.send('VolumeUp'));
  globalShortcut.register('VolumeDown', () => win.webContents.send('VolumeDown'));
  globalShortcut.register('VolumeMute', () => win.webContents.send('VolumeMute'));
  globalShortcut.register('MediaPlayPause', () => win.webContents.send('MediaPlayPause'));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('change-icon', (event, arg) => {
  const station = arg.shortName;
    win.setIcon(path.join(__dirname, 'src', 'logos', `${station}-128-round.png`));
});
