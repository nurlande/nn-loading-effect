import React, { CSSProperties, useEffect } from "react";
import "./Loader.css";

interface MainColors {
  color1: string;
  color2: string;
  color3: string;
}

interface Props {
  colors: MainColors;
  text?: string;
  styles?: CSSProperties
}

export default function Loader({ colors, text, styles }: Props) {
  const setColor = (varName: string, newColor: string) => {
    document.documentElement.style.setProperty(varName, newColor);
  };

  useEffect(() => {
    setColor('--nn-first-color', colors.color1)
    setColor('--nn-second-color', colors.color2)
    setColor('--nn-third-color', colors.color3)
  }, [colors])

  return (
    <div className="loader-header">
      <h1 className="gradient-text loader-text" style={styles}>{text || 'nn-loading-effect'}</h1>
    </div>
  );
}
