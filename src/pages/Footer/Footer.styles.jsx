import { createUseStyles } from "react-jss";
import {
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
  colorGray,
  colorLight,
} from "../../constants";

export const useStyles = createUseStyles({
  footerContainer: {
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,
    background: colorGray,
    borderRadius: DEFAULT_RADIUS
  },
  footerInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "100%",
    color: colorLight,
    borderRadius: DEFAULT_RADIUS,
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,
    "& p": {
      fontSize: 16,
    },
  },
});
