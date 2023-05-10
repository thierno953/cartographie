import { useStyles } from "./WelcomeSection.styles";
import ThiernoImage from "../../assets/images/5-Titre-CARTOGRAPHIE.jpg";

const WelcomeSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcomeContainer}>
      <img src={ThiernoImage} alt="Thierno" className={classes.welcomeImage} />
    </div>
  );
};

export default WelcomeSection;
