import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required("Este campo es requerido."),
    email: Yup
        .string()
        .email()
        .required("Este campo es requerido."),
    phone: Yup
        .string()
        .required("Este campo es requerido."),
    
  });

  export default schema;