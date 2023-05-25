import { createUseStyles } from "react-jss";
import {
  colorDark,
  colorGray,
  colorLight,
  colorLightGray,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
  defaultFontBold,
  defaultFontMedium,
} from "../../constants";

export const useStyles = createUseStyles({
  sayHelloContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    background: colorLightGray,
    padding: DEFAULT_PADDING,
    borderRadius: DEFAULT_RADIUS,
    margin: "80px 0 40px",
    "@media all and (min-width: 960px)": {
      flexDirection: "row",
      alignItems: "center",
      margin: "120px 0",
    },
  },
  sayHelloContainerLeft: {},
  sayHelloTitle: {
    fontSize: 24,
  },
  smallText: {
    fontSize: 14,
  },
  getInTouchButton: {
    background: colorGray,
    color: colorLight,
    outline: "none",
    border: "none",
    borderRadius: DEFAULT_RADIUS,
    padding: DEFAULT_PADDING,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: defaultFontMedium,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: defaultFontBold,
    cursor: "pointer",
    "& span": {
      marginRight: 8,
    },
    "& svg path": {
      fill: colorLight,
    },
    "&:hover": {
      backgroundColor: colorDark,
    },
  },
});
