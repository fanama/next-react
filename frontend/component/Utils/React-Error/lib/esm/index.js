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
    var listError = _a.listError, setListError = _a.setListError;
    var removeError = function (error) {
        var newList = __spreadArray([], listError, true);
        newList = newList.filter(function (err) { return err !== error; });
        setListError(newList);
    };
    return (React.createElement("div", { style: errorContainer }, listError === null || listError === void 0 ? void 0 : listError.map(function (error) {
        return (React.createElement("div", { style: errorStyle, key: Math.random() },
            error,
            React.createElement(Message, { error: error, removeError: removeError })));
    })));
}
