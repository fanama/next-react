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
import * as React from 'react';
import { hoverStyle, optionStyle } from './style';
export var Option = function (_a) {
    var value = _a.value, children = _a.children, setValue = _a.setValue, width = _a.width, color = _a.color;
    var style = {
        width: width || '100%',
        color: color || 'black',
    };
    // hover state for option
    var _b = React.useState(false), hover = _b[0], setHover = _b[1];
    return (React.createElement("option", { style: __assign(__assign(__assign({}, optionStyle), style), (hover ? hoverStyle : {})), value: value, onClick: function () {
            setValue(value);
        }, onMouseEnter: function () {
            setHover(true);
        }, onMouseLeave: function () {
            setHover(false);
        } }, children));
};
