import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup
        .email()
        .required("Este campo es requerido."),
    address: Yup
        .string()
        .required("Este campo es requerido."),
  });

  export default schema;