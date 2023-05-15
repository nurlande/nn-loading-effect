import React, { useEffect } from "react";
import "./Loader.css";
var defaultColors = {
    color1: 'blue',
    color2: 'lightblue',
    color3: 'aqua'
};
export default function Loader(_a) {
    var _b = _a.colors, colors = _b === void 0 ? defaultColors : _b, text = _a.text, styles = _a.styles;
    var setColor = function (varName, newColor) {
        document.documentElement.style.setProperty(varName, newColor);
    };
    useEffect(function () {
        setColor('--nn-first-color', colors.color1);
        setColor('--nn-second-color', colors.color2);
        setColor('--nn-third-color', colors.color3);
    }, [colors]);
    return (React.createElement("div", { className: "loader-header" },
        React.createElement("h1", { className: "gradient-text loader-text", style: styles }, text || 'LOADING...')));
}
