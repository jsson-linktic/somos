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

            this.props.dataStep(data, "AdditionalInfo", "next")
            console.log('values :', values);
        }
        const eventPrev = () => {
            this.props.dataStep({}, "HomeInfo", "prev");
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
                            <div className="row btn-50 hv-border">
                                <div className="col-md-6 text-left">
                                    <button
                                        //disabled={!isValid}
                                        type='button'
                                        className="btn bg-clff5f60"
                                        onClick={eventPrev}>
                                        Volver
                                    </button>
                                </div>

                                <div className="col-md-6 text-right">
                                    <button
                                        //disabled={!isValid}
                                        type='button'
                                        className="btn bg-clff5f60"
                                        onClick={() => handleClick(values, 1)}>
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
}

export default AdditionalInfo;