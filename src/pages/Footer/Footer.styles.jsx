import { createUseStyles } from "react-jss";
import { DEFAULT_PADDING, DEFAULT_RADIUS, colorBlue, colorGray, colorLight } from "../../constants";

export const useStyles = createUseStyles({
    footerBackground: {
     background: colorBlue,
     maxWidth: "100%",
     padding: 2
    },
    footerContainer: {
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: DEFAULT_PADDING,
    background: colorGray,
    maxWidth: "100%",
    padding: DEFAULT_PADDING,
    color: colorLight,
    borderRadius: DEFAULT_RADIUS,

    "& p": {
        fontSize: 16,
    }
  }
});
