"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = __importDefault(require("i18next"));
var i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
i18next_1.default
    .use(i18next_fs_backend_1.default)
    .init({
    backend: {
        loadPath: './locales/{{lng}}/{{ns}}.json',
        addPath: './locales/{{lng}}/{{ns}}.missing.json',
    },
    lng: 'en',
    fallbackLng: 'en',
    saveMissing: true,
    debug: true,
    interpolation: {
        escapeValue: false
    },
});
exports.default = i18next_1.default;
