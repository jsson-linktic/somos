import * as Yup from "yup";

const schema = Yup.object().shape({
    educationLavel: Yup
        .string()
        .required("Este campo es requerido."),
    profession: Yup
        .string()
        .required("Este campo es requerido.")
  });

  export default schema;