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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.Option = void 0;
var React = __importStar(require("react"));
var style_1 = require("./style");
var Option_1 = require("./Option");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return Option_1.Option; } });
function Select(_a) {
    var children = _a.children, value = _a.value, width = _a.width, className = _a.className, color = _a.color, displayValue = _a.displayValue;
    var _b = React.useState(false), focus = _b[0], setFocus = _b[1];
    var _c = React.useState([]), keys = _c[0], setKeys = _c[1];
    React.useEffect(function () {
        if (value) {
            console.log({ value: value });
            var keys_1 = Object.keys(value);
            console.log({ keys: keys_1 });
            setKeys(keys_1);
        }
    }, [value]);
    var props = {
        width: width || '100%',
        color: color || 'black',
    };
    return (React.createElement("div", { className: className || '', style: __assign(__assign({}, style_1.selectStyle), props) },
        React.createElement("div", { onClick: function () {
                focus ? setFocus(false) : setFocus(true);
            }, style: style_1.valueStyle },
            React.createElement("label", null, displayValue ? value[displayValue] : value[keys[0]]),
            React.createElement("div", { style: focus ? style_1.triangleUp : style_1.triangleDown })),
        focus && (React.createElement("span", { style: style_1.optionBoxStyle, onClick: function () { return setFocus(false); } }, children))));
}
exports.Select = Select;
