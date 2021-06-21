import { app, BrowserWindow } from 'electron';

export class MainWindow {
  public readonly window: BrowserWindow;

  constructor() {
    this.window = this.createWindow();
  }

  createWindow(): BrowserWindow {
    const window = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true
      }
    })

    // Load our index.html
    window.loadURL(`file://${app.getAppPath()}/index.html`)
    
    return window;
  }
}