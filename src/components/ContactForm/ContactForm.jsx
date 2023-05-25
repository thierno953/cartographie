import { useStyles } from "./ContactForm.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schema } from "./config";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik validationSchema={schema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div className={classes.formInput}>
            <label htmlFor="name">Nom</label>
            <Field
              type="string"
              name="name"
              placeholder="Entrer votre Nom..."
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="email">Email</label>
            <Field
              type="string"
              name="email"
              placeholder="Entrer votre Email..."
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="message">Message</label>
            <Field
              type="string"
              name="message"
              component="textarea"
              placeholder="Dites-moi en quoi consiste votre projet ou vos questions?"
              rows={3}
            />
            <ErrorMessage name="message" component="div" />
          </div>
          <div className={classes.formInput}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.formButton}
            >
              <span>Envoie</span>
              <FaArrowRight />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
