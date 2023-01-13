import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "start",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: vars.colors.background,
  fontFamily: vars.fonts.body,
  color: vars.colors.text.normal,
  fontWeight: vars.fontWeights.normal,
  padding: vars.spaces.xl,
  rowGap: vars.spaces.l,
  transition: vars.transitions.default,
  lineHeight: vars.lineHeight.medium,
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("*, *::before, *::after", {
  all: "unset",
  boxSizing: "border-box",
  WebkitUserSelect: "text",
  MozUserSelect: "text",
  msUserSelect: "text",
  userSelect: "text",
  WebkitTapHighlightColor: "transparent",
  WebkitTextSizeAdjust: "100%",
  MozTextSizeAdjust: "100%",
  textSizeAdjust: "100%",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none !important",
      transition: "none !important",
    },
  },
});

globalStyle("script, style, title", {
  display: "none",
});

globalStyle("body", {
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
});

globalStyle("a", {
  textDecoration: "underline",
});

globalStyle("a:hover", {
  textDecoration: "none",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("img, video", {
  height: "auto",
});

globalStyle("img", {
  imageRendering: "pixelated",
  pointerEvents: "none",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("#root", {
  isolation: "isolate",
});

globalStyle("*::selection, *::-moz-selection", {
  backgroundColor: "red",
  color: "gold",
});

globalStyle("hr", {
  width: "100%",
  height: "1px",
  backgroundColor: "currentColor",
});
