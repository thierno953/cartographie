import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  aboutContainer: {
    marginTop: "4vh",
    marginBottom: "4vh",
  },
  aboutMeContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    "@media all and (min-width: 960px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  aboutMeTextWrapper: {
    "& p": {
      fontSize: 16,
    },
    "@media all and (min-width: 960px)": {
      paddingRight: 20,
    },
  },
  aboutMeImage: {
    width: "100%",
    objectFit: "cover",
    margin: "0 auto 20px",
    "@media all and (min-width: 960px)": {
      width: "100%",
      maxWidth: "100%",
      height: "50vh",
      objectFit: "cover",
      margin: "initial",
    },
  },
});
