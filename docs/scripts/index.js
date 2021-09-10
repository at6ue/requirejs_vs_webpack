var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "i18next", "jquery", "./child"], function (require, exports, i18next_1, jquery_1, child_1) {
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
    console.log('== dynamic import ==');
    new Promise(function (resolve_1, reject_1) { require(['./main'], resolve_1, reject_1); }).then(__importStar).then(function (main) { return main.init(); });
});
