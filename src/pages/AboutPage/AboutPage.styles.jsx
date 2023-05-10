import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  aboutContainer: {
    maxWidth: 800,
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    "@media all and (min-width: 960px)": {
      marginTop: 40,
      marginBottom: 40,
    },
  },
  aboutMeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  aboutMeTextWrapper: {
    "& p": {
      fontSize: 16,
    },
    "@media all and (min-width: 960px)": {
      paddingRight: 120,
    },
  },
});
