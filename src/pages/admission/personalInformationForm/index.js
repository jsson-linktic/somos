import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import schema from './schema';
import { FormikReactSelect } from '../../../components/FormikFields';


const url_dev = 'http://192.168.1.144:3000/api/';

class PersonalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          user: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.confirmUser();
        this.getUserById();
    }

    handleChange(event){
        this.setState({
            email: event.target.value
        });
    }

    confirmUser(){
        if(this.props.userDataId){
            axios.post(`${url_dev}scriptFunction/activateUser `, {
                id: Number(this.props.userDataId)
            })
            .then(response => {
                console.log(response);
                //swal(response.data.message);
            })
        }
    }

    getUserById(){
        if(this.props.userDataId){
            axios.get(`${url_dev}userData?filter[where][id]=${this.props.userDataId}`)
            .then(response => {
                console.log('response :', response.data[0]);
                this.setState({
                    user: response.data[0]
                });
            }).catch(e => {
                console.log('e :', e);
            });
        }
    }

    render() {
        console.log('this.props.userDataId :', this.props.userDataId);
        
        const gennders = [
            { value: 'Hombre', label: 'Hombre' },
            { value: 'Mujer', label: 'Mujer' }
        ]

        const civilStatus = [
            { value: 'Solter@', label: 'Solter@' },
            { value: 'Casad@', label: 'Casad@' },
        ]

        const countries = [
            { value: 'Colombia', label: 'Colombia' }
        ]

        const departaments = [
            { value: 'Cundinamarca', label: 'Cundinamarca' }
        ]

        const cities = [
            { value: 'Bogotá', label: 'Bogotá' }
        ]

        const typeDocuments = [
            { value: 'Cedula de ciudadania', label: 'Cedula de ciudadania' }
        ]

        const professions = [
            { value: 'Desarrollador', label: 'Desarrollador' }
        ]
          

        const handleClick = values =>{
            const data = {
                ...values,
                city: values.city.value,
                civilStatus: values.civilStatus.value,
                country: values.country.value,
                department: values.department.value,
                profession: values.profession.value,
                sex: values.sex.value,
                typeDocument: values.typeDocument.value,
                userDataId: this.props.userDataId
            }
            delete data.id;

            this.props.dataStep(data, "PersonalInformation", "next")

            /*axios.post(`${url_dev}personalInfo`, { ...data })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    swal({
                        text: "Formulario enviado correctamente",
                        icon: "success",
                        button: "Ok",
                      });
                })
                .catch(e => {
                    console.log('e :', e);
                    swal("Oppss!", "Error en el servidor!", "error");
                })*/
        }

        console.log('this.props.data :', this.props.data);
        const initialValues = (this.props.data && this.props.data.lastName) ? 
        {
            ...this.props.data
        } :
        {
            firstName: this.state.user.name,
            secondName: '',
            lastName: '',
            secondLastName: '',
            sex: '',
            civilStatus: '',
            birthDate: '',
            country: '',
            department: '',
            city: '',
            typeDocument: '',
            documentNumber: '',
            expeditionDate: '',
            profession: '',
            ...this.state.user
        }
        console.log('initialValues :', initialValues);

        return (
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={ (values) => {
                    handleClick(values)
                }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isValid,
                        setFieldValue,
                        setFieldTouched
                    }) => (
                        <Form onSubmit={handleSubmit} className="apply-now">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="cw">Primer nombre</label>
                                    <input
                                        id="firstName"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        disabled={true}
                                        aria-describedby="emailHelp" placeholder="Primer nombre"/>
                                    {errors.firstName && touched.firstName && (
                                        <label className="cy">{errors.firstName}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Segundo nombre</label>
                                    <input
                                        id="secondName"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="secondName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.secondName}
                                        aria-describedby="emailHelp" placeholder="Segundo nombre"/>
                                    {errors.secondName && touched.secondName && (
                                        <label className="cy">{errors.secondName}</label>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="cw">Primer apellido</label>
                                    <input
                                        id="lastName"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        aria-describedby="emailHelp" placeholder="Primer apellido"/>
                                    {errors.lastName && touched.lastName && (
                                        <label className="cy">{errors.lastName}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Segundo apellido</label>
                                    <input
                                        id="secondLastName"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="secondLastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.secondLastName}
                                        aria-describedby="emailHelp" placeholder="Segundo apellido"/>
                                    {errors.secondLastName && touched.secondLastName && (
                                        <label className="cy">{errors.secondLastName}</label>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="cw">Sexo</label>
                                    <FormikReactSelect
                                        name="sex"
                                        id="sex"
                                        value={values.sex}
                                        isMulti={false}
                                        options={gennders}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.sex && touched.sex && (
                                        <label className="cy">{errors.sex}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Estado civil</label>
                                    <FormikReactSelect
                                        name="civilStatus"
                                        id="civilStatus"
                                        value={values.civilStatus}
                                        isMulti={false}
                                        options={civilStatus}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.civilStatus && touched.civilStatus && (
                                        <label className="cy">{errors.civilStatus}</label>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="cw">Fecha de nacimiento</label>
                                    <input
                                        id="birthDate"
                                        className="form-control"
                                        type="date"
                                        name="birthDate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.birthDate}
                                        placeholder="Primer nombre"/>
                                    {errors.birthDate && touched.birthDate && (
                                        <label className="cy">{errors.birthDate}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Pais de nacimiento</label>
                                    <FormikReactSelect
                                        name="country"
                                        id="country"
                                        value={values.country}
                                        isMulti={false}
                                        options={countries}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.country && touched.country && (
                                        <label className="cy">{errors.country}</label>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label className="cw">Departamento de nacimiento</label>
                                    <FormikReactSelect
                                        name="department"
                                        id="department"
                                        value={values.department}
                                        isMulti={false}
                                        options={departaments}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.department && touched.department && (
                                        <label className="cy">{errors.department}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Ciudad de nacimiento</label>
                                    <FormikReactSelect
                                        name="city"
                                        id="city"
                                        value={values.city}
                                        isMulti={false}
                                        options={cities}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.city && touched.city && (
                                        <label className="cy">{errors.city}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Tipo de documento</label>
                                    <FormikReactSelect
                                        name="typeDocument"
                                        id="typeDocument"
                                        value={values.typeDocument}
                                        isMulti={false}
                                        options={typeDocuments}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.typeDocument && touched.typeDocument && (
                                        <label className="cy">{errors.typeDocument}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Numero de documento de identidad</label>
                                    <input
                                        id="documentNumber"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="documentNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.documentNumber}
                                        aria-describedby="emailHelp" placeholder="Numero de documento de identidad"/>
                                    {errors.documentNumber && touched.documentNumber && (
                                        <label className="cy">{errors.documentNumber}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Fecha de expedición</label>
                                    <input
                                        id="documentExpeditionDate"
                                        className="form-control"
                                        type="date"
                                        name="documentExpeditionDate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.documentExpeditionDate}
                                        placeholder="Primer nombre"/>
                                    {errors.documentExpeditionDate && touched.documentExpeditionDate && (
                                        <label className="cy">{errors.documentExpeditionDate}</label>
                                    )}
                                </div>

                            </div>
                            
                            <div className="btn-50 hv-border text-right">
                                <button
                                    //disabled={!isValid}
                                    type='button'
                                    className="btn bg-clff5f60"
                                    onClick={() => handleClick(values, 1)}>
                                    Siguiente
                                </button>
                            </div>
                        </Form>
                    )}
            </Formik>
        )
    }
}

export default PersonalInformation;