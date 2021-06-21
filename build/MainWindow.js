"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainWindow = void 0;
var electron_1 = require("electron");
var MainWindow = /** @class */ (function () {
    function MainWindow() {
        this.window = this.createWindow();
    }
    MainWindow.prototype.createWindow = function () {
        var window = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            show: false,
            webPreferences: {
                nodeIntegration: true
            }
        });
        // Load our index.html
        window.loadURL("file://" + electron_1.app.getAppPath() + "/index.html");
        return window;
    };
    return MainWindow;
}());
exports.MainWindow = MainWindow;
