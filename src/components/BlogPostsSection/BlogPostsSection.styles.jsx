import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  blogPostsContainer: {},
  blogPostsWrapper: {
    marginTop: 35,
    marginBottom: 15,
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    justifyContent: "center",
    gridGap: 20,
  },
  title: {
    fontWeight: 800,
    marginTop: 35,
  },

  blogPostContainer: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    cursor: "pointer",
    "& a": {
      textDecoration: "none"
    },
    "& h5": {
      borderBottom: "1px solid black",
    },
    "& h5:hover": {
      borderBottom: "1px solid blue",
    },
  },
});
