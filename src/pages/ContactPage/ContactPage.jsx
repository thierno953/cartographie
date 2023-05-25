import { useStyles } from "./ContactPage.styles";
import { useGlobalStyles } from "../../constants";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactPage = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={clsx(globalClasses.container, classes.container)}>
      <div className={classes.contactLeftContainer}>
        <h1 className={globalClasses.h2}>
          Discutons,
          <br />
          Contactez-nous 👋
        </h1>
        <p className={classes.smallText}>
          Intéressé à travailler ensemble ou avez-vous des questions?
          <br />
          Contactez-moi via le formulaire ou écrivez-moi à
        </p>
        <Link to="/contact" className={classes.email}>
          <FaEnvelopeOpen /> cartographie@gmail.com
        </Link>
        <br />
        <Link to="/contact" className={classes.email}>
          <FaPhoneAlt /> +32 000 000 000
        </Link>
      </div>
      <div className={classes.contactRightFormContainer}>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
