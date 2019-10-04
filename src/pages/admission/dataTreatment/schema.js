import * as Yup from "yup";

const schema = Yup.object().shape({
    accept: Yup
        .string()
        .required("Este campo es requerido.")
  });

  export default schema;