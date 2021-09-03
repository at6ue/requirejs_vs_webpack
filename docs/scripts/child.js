var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./parent"], function (require, exports, parent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    parent_1 = __importDefault(parent_1);
    class Child extends parent_1.default {
        constructor() {
            super();
            this.childProperty = console.log('(child) property');
            console.log('(child) constructor');
        }
        method() {
            console.log('(child) class method');
        }
        static static_method() {
            console.log('(child) static method');
        }
    }
    exports.default = Child;
    Child.field = console.log('(child) static field');
});
