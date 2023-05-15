import React, { CSSProperties, useEffect } from "react";
import "./Loader.css";

interface MainColors {
  color1: string;
  color2: string;
  color3: string;
}

interface Props {
  colors?: MainColors;
  text?: string;
  styles?: CSSProperties
}

const defaultColors = {
  color1: 'blue',
  color2: 'lightblue',
  color3: 'aqua'
}

export default function Loader({ colors = defaultColors, text, styles }: Props) {
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
      <h1 className="gradient-text loader-text" style={styles}>{text || 'LOADING...'}</h1>
    </div>
  );
}
