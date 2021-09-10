define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Parent = /** @class */ (function () {
        function Parent() {
            this.parentProperty = console.log('(parent) property');
            console.log('(parent) constructor');
        }
        Parent.prototype.method = function () {
            console.log('(parent) class method');
        };
        Parent.static_method = function () {
            console.log('(parent) static method');
        };
        Parent.field = console.log('(parent) static field');
        return Parent;
    }());
    exports.default = Parent;
});
