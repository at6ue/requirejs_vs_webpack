var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./parent"], function (require, exports, parent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    parent_1 = __importDefault(parent_1);
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            var _this = _super.call(this) || this;
            _this.childProperty = console.log('(child) property');
            console.log('(child) constructor');
            return _this;
        }
        Child.prototype.method = function () {
            console.log('(child) class method');
        };
        Child.static_method = function () {
            console.log('(child) static method');
        };
        Child.field = console.log('(child) static field');
        return Child;
    }(parent_1.default));
    exports.default = Child;
});
