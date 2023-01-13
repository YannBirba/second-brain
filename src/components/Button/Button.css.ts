import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles, vars } from "../../theme.css";

const buttonStyle = style({
  border: "none",
  borderRadius: vars.spaces.xxl,
  fontWeight: vars.fontWeights.semiBold,
  width: "fit-content",
  cursor: "pointer",
  lineHeight: vars.lineHeight.small,
  boxShadow: vars.shadows.sm,
  transition: vars.transitions.default,
  ":focus": {
    outline: "2px solid",
    outlineOffset: "3px",
    transition: vars.transitions.fast,
  },
  ":hover": {
    boxShadow: vars.shadows.md,
  },
  ":disabled": {
    backgroundColor: vars.colors.gray100,
    userSelect: "none",
    cursor: "not-allowed",
    textDecoration: "line-through",
  },
  ":active": {
    boxShadow: vars.shadows.lg,
  },
  selectors: {
    "&:hover:disabled": {
      boxShadow: vars.shadows.sm,
      backgroundColor: vars.colors.gray100,
    },
  },
});

const buttonSprinkle = sprinkles({
  padding: {
    mobile: "l",
    tablet: "xl",
    desktop: "xxl",
  },
  fontSize: {
    mobile: "xs",
    tablet: "m",
    desktop: "xxl",
  },
});

export const buttonClass = styleVariants({
  primary: [
    buttonStyle,
    buttonSprinkle,
    {
      backgroundColor: vars.colors.blue300,
      color: vars.colors.text.inverted,
      ":hover": {
        backgroundColor: vars.colors.blue600,
      },
      ":focus": {
        outlineColor: vars.colors.blue300,
      },
    },
  ],
  secondary: [
    buttonStyle,
    buttonSprinkle,
    {
      backgroundColor: vars.colors.pink300,
      color: vars.colors.text.inverted,
      ":hover": {
        backgroundColor: vars.colors.pink600,
      },
      ":focus": {
        outlineColor: vars.colors.pink300,
      },
    },
  ],
  tertiary: [
    buttonStyle,
    buttonSprinkle,
    {
      background: "none",
      color: vars.colors.text.normal,
      textDecoration: "underline",
      outline: "none",
      boxShadow: "none",
      fontWeight: vars.fontWeights.black,
      ":hover": {
        textDecoration: "none",
        boxShadow: "none",
      },
      ":focus": {
        outline: "none",
        boxShadow: "none",
      },
      ":disabled": {
        background: "none",
      },
      selectors: {
        "&:hover:disabled": {
          boxShadow: "none",
          background: "none",
          textDecoration: "line-through",
        },
      },
    },
  ],
});
