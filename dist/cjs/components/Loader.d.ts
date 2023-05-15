import { CSSProperties } from "react";
import "./Loader.css";
interface MainColors {
    color1: string;
    color2: string;
    color3: string;
}
interface Props {
    colors?: MainColors;
    text?: string;
    styles?: CSSProperties;
}
export default function Loader({ colors, text, styles }: Props): JSX.Element;
export {};
