"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoverStyle = exports.crossStyle = exports.errorStyle = exports.errorContainer = void 0;
exports.errorContainer = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '1em',
    color: 'red',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
    zIndex: '100',
};
exports.errorStyle = {
    position: 'relative',
    padding: '1em',
    background: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'red',
    borderBottom: '1px solid red',
};
exports.crossStyle = {
    marginLeft: '0.5em',
    border: '1px solid red',
    padding: '0.2em',
};
exports.hoverStyle = {
    background: 'red',
    color: 'white',
};
