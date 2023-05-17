import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Le nom est requis"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("L'e-mail est requis"),
  message: yup
    .string()
    .min(5, "Message is too short")
    .max(1000, "Message is too long")
    .required("Un message est requis"),
});
