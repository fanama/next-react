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
import { optionBoxStyle, selectStyle, triangleUp, triangleDown, valueStyle } from './style';
import { Option } from './Option';
export { Option };
export function Select(_a) {
    var children = _a.children, value = _a.value, width = _a.width, className = _a.className;
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
    };
    return (React.createElement("div", { className: className || '', style: __assign(__assign({}, selectStyle), props) },
        React.createElement("div", { onClick: function () {
                focus ? setFocus(false) : setFocus(true);
            }, style: valueStyle },
            React.createElement("label", null, value[keys[0]]),
            React.createElement("div", { style: focus ? triangleUp : triangleDown })),
        focus && (React.createElement("span", { style: optionBoxStyle, onClick: function () { return setFocus(false); } }, children))));
}
