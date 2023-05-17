import {useStyles} from './NavigationLinks.styles';
import {NavLink} from "react-router-dom";
import clsx from "clsx";

const NavigationLinks = () => {
    const classes = useStyles();

    return (
        <ul className={classes.navLinks}>
          <li><NavLink to="/propos" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>A propos</NavLink></li>
          {/* <li><NavLink to="/contact" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Get in touch</NavLink></li> */}
        </ul>
    );
};

export default NavigationLinks;