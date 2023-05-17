import { useStyles } from "./SayHelloSection.styles";
import { useGlobalStyles } from "../../constants";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

const SayHelloSection = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.sayHelloContainer}>
      <div className={classes.sayHelloContainerLeft}>
        <h3 className={clsx(globalClasses.h3, classes.sayHelloTitle)}>
          Dites bonjour 👋
        </h3>
        <p className={classes.smallText}>
          Intéressé à travailler ensemble ou besoin d'aide?
        </p>
      </div>
      <Link to="/contact" className={classes.getInTouchButton}>
        <span>Entrer en contact </span>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default SayHelloSection;
