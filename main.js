const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 600,    
    webPreferences:{
      nodeIntegration:true
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()  //ctl+shift+i
}

app.whenReady().then(createWindow)