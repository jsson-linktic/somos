import React, { Component } from 'react'
import { Form, Formik } from 'formik'
import schema from './schema'


class DataTreatment extends Component {
    render() {

        const initialValues = {};

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
                                <div className="col-md-4">
                                    <div className="iconbox">
                                        <div className="iconbox-content img-one">
                                            <h3 className="color-white">
                                                <a href="#"><label className="cw">Términos y condiciones</label></a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="iconbox pt-5">
                                        <div className="iconbox-content img-one">
                                            <h3 className="color-white">
                                                <a href="#"><label className="cw">Politica de tratamiento de datos</label></a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="iconbox pt-5">
                                        <div className="iconbox-content img-one">
                                            <h3 className="color-white">
                                                <a href="#"><label className="cw">Autorización de uso de la información</label></a>
                                            </h3>
                                        </div>
                                    </div>


                                </div>
                                <div className="row col-md-8">
                                    <label>
                                        <input
                                            name="accept"
                                            type="checkbox"
                                            checked={values.accept}
                                            onChange={handleChange} />
                                        </label>
                                    <div className="col-md-10">
                                        <label className="cw">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</label>
                                    </div>
                                </div>
                            </div><br/>

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
            </>
        )
    }
}

export default DataTreatment;