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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableMaker = void 0;
var React = __importStar(require("react"));
function TableMaker(_a) {
    var attributes = _a.attributes;
    // eslint-disable-next-line react/prop-types
    var lines = attributes.map(function (attr, index) {
        var headers = Object.keys(attr);
        return (React.createElement("tr", { key: index }, headers.map(function (header, index) {
            return React.createElement("td", { key: index }, attr[header]);
        })));
    });
    var headers = attributes[0] ? Object.keys(attributes[0]) : [];
    return (React.createElement("div", { className: "tableMaker" },
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null, headers.map(function (header, index) {
                    return React.createElement("th", { key: index }, header);
                }))),
            React.createElement("tbody", null, lines))));
}
exports.TableMaker = TableMaker;
