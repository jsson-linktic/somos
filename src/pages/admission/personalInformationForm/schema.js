import * as Yup from "yup";

const schema = Yup.object().shape({
    firstName: Yup
        .string()
        .required("Este campo es requerido."),
    secondName: Yup
        .string()
        .required("Este campo es requerido."),
    lastName: Yup
        .string()
        .required("Este campo es requerido."),
    secondLastName: Yup
        .string()
        .required("Este campo es requerido."),
    sex: Yup.object()
            .shape({
            label: Yup.string().required(),
            value: Yup.string().required()
        })
        .required("Este campo es requerido."),
    civilStatus: Yup
        .string()
        .required("Este campo es requerido."),
    birthDate: Yup
        .date()
        .required("Este campo es requerido."),
    country: Yup
        .string()
        .required("Este campo es requerido."),
    department: Yup
        .string()
        .required("Este campo es requerido."),
    city: Yup
        .string()
        .required("Este campo es requerido."),
    typeDocument: Yup
        .string()
        .required("Este campo es requerido."),
    documentNumber: Yup
        .string()
        .required("Este campo es requerido."),
    documentExpeditionDate: Yup
        .date()
        .required("Este campo es requerido."),
    profession: Yup
        .string()
        .required("Este campo es requerido."),
  });

  export default schema;