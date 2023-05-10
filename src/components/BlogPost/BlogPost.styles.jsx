import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  blogPostContainer: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
    },
    "& h5": {
      borderBottom: "1px solid black",
    },
    "& h5:hover": {
      borderBottom: "1px solid blue",
    },
  },
});
