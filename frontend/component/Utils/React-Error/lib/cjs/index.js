"use strict";
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
    var listError = _a.listError, setListError = _a.setListError, className = _a.className;
    var removeError = function (error) {
        var newList = __spreadArray([], listError, true);
        newList = newList.filter(function (err) { return err !== error; });
        setListError(newList);
    };
    return (React.createElement("div", { className: className || '', style: style_1.errorContainer }, listError === null || listError === void 0 ? void 0 : listError.map(function (error) {
        return (React.createElement("div", { style: style_1.errorStyle, key: Math.random() },
            error,
            React.createElement(message_1.Message, { error: error, removeError: removeError })));
    })));
}
exports.Error = Error;
