import React, { useEffect } from "react";
import "./Loader.css";
export default function Loader(_a) {
    var colors = _a.colors, text = _a.text, styles = _a.styles;
    var setColor = function (varName, newColor) {
        document.documentElement.style.setProperty(varName, newColor);
    };
    useEffect(function () {
        setColor('--nn-first-color', colors.color1);
        setColor('--nn-second-color', colors.color2);
        setColor('--nn-third-color', colors.color3);
    }, [colors]);
    return (React.createElement("div", { className: "loader-header" },
        React.createElement("h1", { className: "gradient-text loader-text", style: styles }, text || 'nn-loading-effect')));
}
