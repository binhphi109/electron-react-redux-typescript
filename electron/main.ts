import { app, BrowserWindow } from 'electron';
import i18n from './i18n';

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });


  // Load our index.html
  window.loadURL(`file://${app.getAppPath()}/index.html`)
  
});

i18n.on('loaded', (loaded) => {
  console.log('test 123', i18n.t('menu.login'));

  i18n.off('loaded');
});
