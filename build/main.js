"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var i18n_1 = __importDefault(require("./i18n"));
electron_1.app.on('ready', function () {
    var window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // Load our index.html
    window.loadURL("file://" + electron_1.app.getAppPath() + "/index.html");
});
i18n_1.default.on('loaded', function (loaded) {
    console.log('test 123', i18n_1.default.t('menu.login'));
    i18n_1.default.off('loaded');
});
