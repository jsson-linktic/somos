import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
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

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
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

            axios.post(`${url_dev}personalInfo`, { ...data })
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
                })
        }

        const initialValues = {
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
                                    <label>Primer nombre</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.firstName}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Segundo nombre</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.secondName}</small>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label>Primer apellido</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.lastName}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Segundo apellido</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.secondLastName}</small>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label>Sexo</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.sex}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Estado civil</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.civilStatus}</small>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label>Fecha de nacimiento</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.birthDate}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Pais de nacimiento</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.country}</small>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label>Departamento de nacimiento</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.department}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Ciudad de nacimiento</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.city}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Tipo de documento</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.typeDocument}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Numero de documento de identidad</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.documentNumber}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Fecha de expedición</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.documentExpeditionDate}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Cargo actual</label>
                                    <FormikReactSelect
                                        name="profession"
                                        id="profession"
                                        value={values.profession}
                                        isMulti={false}
                                        options={professions}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.profession && touched.profession && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.profession}</small>
                                    )}
                                </div>
                                
                                    
                            </div>
                            
                            <div className="btn-50 hv-border text-center">
                                <button
                                    disabled={!isValid}
                                    type='button'
                                    className="btn bg-clff5f60"
                                    onClick={() => handleClick(values, 1)}>
                                    Guardar
                                </button>
                            </div>
                        </Form>
                    )}
            </Formik>
        )
    }
}

export default PersonalInformation;