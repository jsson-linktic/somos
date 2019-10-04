import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import schema from './schema'

class AdditionalInfo extends Component {
    render (){

        const initialValues = {}

        const handleClick = values => {
            console.log('values :', values);
        }


        return (

            <>
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
                        <Form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Nivel de estudios</label>
                                    <input
                                        id="educationLavel"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="educationLavel"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.educationLavel}
                                        aria-describedby="emailHelp" placeholder="Nivel de estudios"/>
                                    {errors.educationLavel && touched.educationLavel && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.educationLavel}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Profesión u oficio</label>
                                    <input
                                        id="profession"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="profession"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.profession}
                                        aria-describedby="emailHelp" placeholder="profession u oficio"/>
                                    {errors.profession && touched.profession && (
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.profession}</small>
                                    )}
                                </div>
                            </div>
                            <div className="btn-50 hv-border text-center">
                                <button
                                    //disabled={!isValid}
                                    type='button'
                                    className="btn bg-clff5f60"
                                    onClick={() => handleClick(values, 1)}>
                                    Guardar
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
}

export default AdditionalInfo;