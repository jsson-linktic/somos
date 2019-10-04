import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup
        .string()
        .email("Debe ser un correo electrónico")
        .required("Este campo es requerido."),
    address: Yup
        .string()
        .required("Este campo es requerido."),
    phone: Yup
        .string()
        .required("Este campo es requerido."),
    addressNotification: Yup
        .string()
        .required("Este campo es requerido.")
  });

  export default schema;