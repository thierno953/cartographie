import { createUseStyles } from "react-jss";
import { DEFAULT_RADIUS } from "../../../../constants";

export const useStyles = createUseStyles({
  AfghansBeguinageContainer: {
    maxWidth: 800,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    "@media all and (min-width: 960px)": {
      marginTop: 40,
      marginBottom: 40,
    },
  },

  AfghanBeguinageImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    maxWidth: "100%",
    width: 650,
    height: "auto",
    padding: "10px 0px",
    borderRadius: DEFAULT_RADIUS,
  },
});
