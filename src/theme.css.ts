import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalFontFace,
} from "@vanilla-extract/css";

import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const openSans = "Open Sans";

globalFontFace(openSans, {
  src: 'url("/src/assets/fonts/OpenSans.ttf") format("ttf")',
  fontDisplay: "swap",
  fontStyle: "normal",
});

const colors = createThemeContract({
  blue100: null,
  blue200: null,
  blue300: null,
  blue400: null,
  blue500: null,
  blue600: null,
  blue700: null,
  pink100: null,
  pink200: null,
  pink300: null,
  pink400: null,
  pink500: null,
  pink600: null,
  pink700: null,
  gray100: null,
  gray200: null,
  gray300: null,
  gray400: null,
  gray500: null,
  gray600: null,
  gray700: null,
  gray800: null,
  gray900: null,

  background: null,
  text: {
    normal: null,
    dimmed: null,
    inverted: null,
  },
});

export const lightTheme = createTheme(colors, {
  blue100: "#1E3A8A",
  blue200: "#1C366B",
  blue300: "#1A3158",
  blue400: "#162E4E",
  blue500: "#12283A",
  blue600: "#0F2132",
  blue700: "#0C1A29",
  pink100: "#4F0F6F",
  pink200: "#3F0D5F",
  pink300: "#3A0B55",
  pink400: "#2F0A48",
  pink500: "#240938",
  pink600: "#1D0830",
  pink700: "#160725",
  gray100: "#4B5563",
  gray200: "#374151",
  gray300: "#1F2937",
  gray400: "#111827",
  gray500: "#000000",
  gray600: "#000000",
  gray700: "#000000",
  gray800: "#000000",
  gray900: "#000000",
  background: "#EFF6FF",
  text: {
    normal: "#1F2937",
    dimmed: "#6B7280",
    inverted: "#FFFFFF",
  },
});

export const darkTheme = createTheme(colors, {
  blue100: "#D1E6FF",
  blue200: "#A3CDFF",
  blue300: "#74B0FC",
  blue400: "#4B9FFB",
  blue500: "#1E88F7",
  blue600: "#1A64DB",
  blue700: "#144DBF",
  pink100: "#FFE0F0",
  pink200: "#FFB8D2",
  pink300: "#FF8CBA",
  pink400: "#F364A2",
  pink500: "#E8368F",
  pink600: "#DA127D",
  pink700: "#BC0A6F",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",
  background: "#1F2937",
  text: {
    normal: "#F9FAFB",
    dimmed: "#D1D5DB",
    inverted: "#1F2937",
  },
});

const root = createGlobalTheme("#app", {
  fonts: {
    body: openSans,
  },
  fontSizes: {
    xs: "0.875rem",
    s: "0.925rem",
    m: "1rem",
    l: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },
  fontWeights: {
    thin: "100",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    black: "800",
    extraBlack: "900",
  },
  lineHeights: {
    small: "1.2",
    medium: "1.5",
    large: "1.8",
  },

  breakpoints: {
    tablet: "768px",
    desktop: "1024px",
  },

  transitions: {
    default: "all 0.3s ease-in-out",
    fast: "all 0.05s ease-in-out",
    linear: "all 0.3s linear",
    slow: "all 0.5s ease-in-out",
  },

  shadows: {
    sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    md: `0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)`,
    lg: `0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6)`,
  },

  lineHeight: {
    small: "1.2",
    medium: "1.5",
    large: "1.8",
  },
  spaces: {
    xs: "2px",
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "32px",
    xxl: "64px",
    half: "50%",
    full: "100%",
    vh: "100vh",
    vw: "100vw",
  },
});

const spaceProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": "screen and (min-width: 768px)",
    },
    desktop: {
      "@media": "screen and (min-width: 1024px)",
    },
  },
  defaultCondition: "mobile",
  properties: {
    fontSize: root.fontSizes,
    lineHeight: root.lineHeights,
    margin: root.spaces,
    padding: root.spaces,
    borderRadius: root.spaces,
    textAlign: ["left", "center", "right"],
    fontWeight: root.fontWeights,
  },
  shorthands: {
    text: ["fontSize", "lineHeight"],
    lh: ["lineHeight"],
    fz: ["fontSize"],
  },
});

export const sprinkles = createSprinkles(spaceProperties);

export const vars = { ...root, colors };
