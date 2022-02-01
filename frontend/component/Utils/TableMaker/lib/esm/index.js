import * as React from 'react';
export function TableMaker(_a) {
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
