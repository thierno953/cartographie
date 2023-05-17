import { useGlobalStyles } from "../../constants";
import { useStyles } from "./Footer.styles";
import clsx from "clsx";

const Footer = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
 
    <div className={clsx(globalClasses.container, classes.footerContainer)}>
    <div className={classes.footerInfo}>
      <div>
        <h3>Dites bonjour</h3>
        <p>Vous trouverez un formulaire</p>
        <p>Vous trouverez un formulaire</p>
        <p>Vous trouverez un formulaire</p>
      </div>
      <div>
        <h3>Dites bonjour</h3>
        <p>Vous trouverez un formulaire</p>
        <p>Vous trouverez un formulaire</p>
        <p>Vous trouverez un formulaire</p>
      </div>
      <div>
        <h3>Dites bonjour</h3>
        <p>Vous trouverez un formulaire</p>
        <p>Vous trouverez un formulaire</p>
        <p>Vous trouverez un formulaire</p>
      </div>
    </div>
    </div>

  );
};

export default Footer;
