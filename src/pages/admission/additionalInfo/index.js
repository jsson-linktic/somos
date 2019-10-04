import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import schema from './schema'

class AdditionalInfo extends Component {
    render (){

        const initialValues = {}

        const handleClick = values => {

            const data = {
                ...values
            }

            this.props.dataStep(data, "AdditionalInfo")
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
                                    <label className="cw">Nivel de estudios</label>
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
                                        <label className="cy">{errors.educationLavel}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Profesión u oficio</label>
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
                                        <label className="cy">{errors.profession}</label>
                                    )}
                                </div>
                            </div>
                            <div className="btn-50 hv-border text-right">
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