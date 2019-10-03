import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import DatePicker from "react-datepicker/es/";
import "react-datepicker/dist/react-datepicker.css";

class PersonalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            email: event.target.value
        });
    }

    render() {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]
          

        const handleClick = values =>{
            console.log(values)
        }

        return (
            <Formik
                enableReinitialize={true}
                initialValues={
                    {
                        email: this.state.email
                    }
                }
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    )
                    {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
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
                        isValid
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
                                        id="secFirstName"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="secFirstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.secFirstName}
                                        aria-describedby="emailHelp" placeholder="Primer nombre"/>
                                    {errors.secFirstName && touched.secFirstName && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.secFirstName}</small>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label>Sexo</label>
                                    <Select
                                        id="gender"
                                        name="gender"
                                        className="react-select gender"
                                        classNamePrefix="react-select"
                                        options={options}/>
                                    {errors.gender && touched.gender && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.gender}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Estado civil</label>
                                    <Select
                                        id="civilStatus"
                                        className="react-select civilStatus"
                                        classNamePrefix="react-select"
                                        options={options}/>
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
                                    <Select
                                        id="country"
                                        className="react-select country"
                                        classNamePrefix="react-select"
                                        options={options}/>
                                    {errors.country && touched.country && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.country}</small>
                                    )}
                                </div>


                                <div className="form-group col-md-6">
                                    <label>Departamento de nacimiento</label>
                                    <Select
                                        id="department"
                                        className="react-select department"
                                        classNamePrefix="react-select"
                                        options={options}/>
                                    {errors.department && touched.department && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.department}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Ciudad de nacimiento</label>
                                    <Select
                                        id="city"
                                        className="react-select city"
                                        classNamePrefix="react-select"
                                        options={options}/>
                                    {errors.city && touched.city && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.city}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Tipo de documento</label>
                                    <Select
                                        id="typeDocument"
                                        className="react-select typeDocument"
                                        classNamePrefix="react-select"
                                        options={options}/>
                                    {errors.typeDocument && touched.typeDocument && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.typeDocument}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Numero de documento de identidad</label>
                                    <input
                                        id="numerDocument"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="numerDocument"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.numerDocument}
                                        aria-describedby="emailHelp" placeholder="Primer nombre"/>
                                    {errors.numerDocument && touched.numerDocument && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.numerDocument}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Fecha de expedición</label>
                                    <input
                                        id="expeditionDate"
                                        className="form-control"
                                        type="date"
                                        name="expeditionDate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.expeditionDate}
                                        placeholder="Primer nombre"/>
                                    {errors.expeditionDate && touched.expeditionDate && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.expeditionDate}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Cargo actual</label>
                                    <Select
                                        id="actualCharge"
                                        className="react-select actualCharge"
                                        classNamePrefix="react-select"
                                        options={options}/>
                                    {errors.actualCharge && touched.actualCharge && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.actualCharge}</small>
                                    )}
                                </div>
                                
                                    
                            </div>
                            
                            <div className="form-sent">
                                <button type='button' className="sent-button bg-cl3f4c99" onClick={() => handleClick(values)}  disabled={!isValid}>
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                </button>
                            </div>
                        </Form>
                    )}
            </Formik>
        )
    }
}

export default PersonalInformation;