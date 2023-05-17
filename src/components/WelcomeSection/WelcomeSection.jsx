import { useStyles } from "./WelcomeSection.styles";
import ThiernoImage from "../../assets/images/5-Titre-CARTOGRAPHIE.jpg";

const WelcomeSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcomeContainer}>
      <img src={ThiernoImage} alt="Thierno" className={classes.welcomeImage} />
      <div className={classes.welcomeText}>
        <h1>J’ai commencé ce projet en 2019.</h1>
        <p>
          Le point de départ fut ma rencontre avec les habitants de la maison
          des migrants.
        </p>
        <p>
          Le point de départ fut ma rencontre avec les habitants de la maison
          des migrants, en 2016, alors située rue prince royal N°103.{" "}
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
