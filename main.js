const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,    
    webPreferences:{
      nodeIntegration:true
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()  //ctl+shift+i
}

app.whenReady().then(createWindow)