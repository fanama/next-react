"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
var React = __importStar(require("react"));
var message_1 = require("./message");
var style_1 = require("./style");
function Error(_a) {
    var listError = _a.listError, setListError = _a.setListError, className = _a.className, color = _a.color;
    var removeError = function (error) {
        var newList = __spreadArray([], listError, true);
        newList = newList.filter(function (err) { return err !== error; });
        setListError(newList);
    };
    var componentStyle = __assign(__assign({}, style_1.errorContainer), {
        color: color || 'red',
    });
    var elementStyle = __assign(__assign({}, style_1.errorStyle), {
        color: color || 'red',
        borderBottom: color ? "1px solid ".concat(color) : '1px solid red',
    });
    return (React.createElement("div", { className: className || '', style: componentStyle }, listError === null || listError === void 0 ? void 0 : listError.map(function (error, i) {
        return (React.createElement("div", { style: elementStyle, key: i },
            error,
            React.createElement(message_1.Message, { error: error, action: removeError, color: color })));
    })));
}
exports.Error = Error;
