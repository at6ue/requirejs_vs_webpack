define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Parent {
        constructor() {
            this.parentProperty = console.log('(parent) property');
            console.log('(parent) constructor');
        }
        method() {
            console.log('(parent) class method');
        }
        static static_method() {
            console.log('(parent) static method');
        }
    }
    exports.default = Parent;
    Parent.field = console.log('(parent) static field');
});
