"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./Loader.css");
function Loader(_a) {
    var colors = _a.colors, text = _a.text, styles = _a.styles;
    var setColor = function (varName, newColor) {
        document.documentElement.style.setProperty(varName, newColor);
    };
    (0, react_1.useEffect)(function () {
        setColor('--nn-first-color', colors.color1);
        setColor('--nn-second-color', colors.color2);
        setColor('--nn-third-color', colors.color3);
    }, [colors]);
    return (react_1.default.createElement("div", { className: "loader-header" },
        react_1.default.createElement("h1", { className: "gradient-text loader-text", style: styles }, text || 'nn-loading-effect')));
}
exports.default = Loader;
