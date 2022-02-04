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
import { useState } from 'react';
import { crossStyle, hoverStyle } from './style';
export function Message(_a) {
    var error = _a.error, action = _a.action, color = _a.color;
    var _b = useState(false), hover = _b[0], setHover = _b[1];
    var style = __assign(__assign(__assign({}, crossStyle), { color: color || 'red', border: color ? "1px solid ".concat(color, " ") : '1px solid red' }), (hover ? hoverStyle : {}));
    return (React.createElement("div", { style: style, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: function () { return action(error); } }, "X"));
}
