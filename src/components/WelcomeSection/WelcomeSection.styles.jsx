import { createUseStyles } from "react-jss";
import { DEFAULT_RADIUS } from "../../constants";

export const useStyles = createUseStyles({
  welcomeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "4vh",
    marginBottom: "4vh",
  },
  welcomeText: {
    lineHeight: 1.5,
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
  },
  welcomeImage: {
    display: "block",
    maxWidth: "100%",
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: DEFAULT_RADIUS,
  },
});
