var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "i18next", "jquery", "./child", "./main"], function (require, exports, i18next_1, jquery_1, child_1, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    i18next_1 = __importDefault(i18next_1);
    jquery_1 = __importDefault(jquery_1);
    child_1 = __importDefault(child_1);
    console.log('== loaded ==');
    window.$ = jquery_1.default;
    window.i18n = i18next_1.default;
    console.log('== construct ==');
    new child_1.default();
    (0, main_1.init)();
});
