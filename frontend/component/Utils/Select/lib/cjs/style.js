"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleUp = exports.triangleDown = exports.hoverStyle = exports.optionStyle = exports.optionBoxStyle = exports.valueStyle = exports.selectStyle = void 0;
exports.selectStyle = {
    position: 'relative',
};
exports.valueStyle = {
    backgroundColor: 'white',
    padding: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
};
exports.optionBoxStyle = {
    position: 'absolute',
    top: '100%',
    maxHeight: '200px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    left: '0',
    width: '100%',
    border: '1px solid #ccc',
    borderTop: 'none',
    zIndex: '1',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(255,255,255,0.8)',
};
exports.optionStyle = {
    padding: '1em',
    width: '100%',
};
exports.hoverStyle = {
    backgroundColor: 'lightgrey',
};
exports.triangleDown = {
    width: '0',
    height: '0',
    border: '0.5em solid transparent',
    borderTop: '1em solid lightgrey',
    borderBottom: '0',
};
exports.triangleUp = {
    width: '0',
    height: '0',
    border: '0.5em solid transparent',
    borderTop: '0',
    borderBottom: '1em solid lightgrey',
};
