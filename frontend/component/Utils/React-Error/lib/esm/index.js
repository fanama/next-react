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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { Message } from './message';
import { errorContainer, errorStyle } from './style';
export function Error(_a) {
    var listError = _a.listError, setListError = _a.setListError, className = _a.className, color = _a.color;
    var removeError = function (error) {
        var newList = __spreadArray([], listError, true);
        newList = newList.filter(function (err) { return err !== error; });
        setListError(newList);
    };
    var componentStyle = __assign(__assign({}, errorContainer), {
        color: color || 'red',
    });
    var elementStyle = __assign(__assign({}, errorStyle), {
        color: color || 'red',
        borderBottom: color ? "1px solid ".concat(color) : '1px solid red',
    });
    return (React.createElement("div", { className: className || '', style: componentStyle }, listError === null || listError === void 0 ? void 0 : listError.map(function (error, i) {
        return (React.createElement("div", { style: elementStyle, key: i },
            error,
            React.createElement(Message, { error: error, action: removeError, color: color })));
    })));
}
