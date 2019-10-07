import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import schema from './schema'
import { FormikReactSelect } from '../../../components/FormikFields'

class AcademicInformation extends Component {
    render() {

        const initialValues = (this.props.data && this.props.data.lastName) ? {
            ...this.props.data
        } : {
            
        }

        const lavels = [
            { value: 'Bachiller', label: 'Bachiller' },
            { value: 'Primaria', label: 'Primaria' }
        ];
        const modalities = [
            { value: 'Presencial', label: 'Presencial' },
            { value: 'Virtual', label: 'Virtual' }
        ]

        const handleClick = values => {

            const data = {
                ...values
            }

            this.props.dataStep(data, "AcademicInformation", "next")
            console.log('values :', values);
        }
        const eventPrev = () => {
            this.props.dataStep({}, "AcademicInformation", "prev");
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
                                    <label className="cw">Nivel de formación</label>
                                    <FormikReactSelect
                                        name="traininglevel"
                                        id="traininglevel"
                                        value={values.traininglevel}
                                        isMulti={false}
                                        options={lavels}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.traininglevel && touched.traininglevel && (
                                        <label className="cy">{errors.traininglevel}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Fecha de graduación de bachillerato</label>
                                    <input
                                        id="graduationDate"
                                        className="form-control"
                                        type="date"
                                        name="graduationDate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.graduationDate}/>
                                    {errors.graduationDate && touched.graduationDate && (
                                        <label className="cy">{errors.graduationDate}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Nombre de la Institución de Bachillerato</label>
                                    <input
                                        id="nameInstitution"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="nameInstitution"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nameInstitution}
                                        aria-describedby="emailHelp" placeholder="Nombre de la Institución de Bachillerato"/>
                                    {errors.nameInstitution && touched.nameInstitution && (
                                        <label className="cy">{errors.nameInstitution}</label>
                                    )}
                                </div>
                                
                                <div className="form-group col-md-6">
                                    <label className="cw">Modalidad de bachillerato</label>
                                    <FormikReactSelect
                                        name="baccalaureateMode"
                                        id="baccalaureateMode"
                                        value={values.baccalaureateMode}
                                        isMulti={false}
                                        options={modalities}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.baccalaureateMode && touched.baccalaureateMode && (
                                        <label className="cy">{errors.baccalaureateMode}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Código pruebas 'Saber 11'</label>
                                    <input
                                        id="testingCode"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="testingCode"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.testingCode}
                                        aria-describedby="emailHelp" placeholder="testingCode u oficio"/>
                                    {errors.testingCode && touched.testingCode && (
                                        <label className="cy">{errors.testingCode}</label>
                                    )}
                                </div>
                                
                                <div className="form-group col-md-6">
                                    <label className="cw">Puntaje pruebas 'Saber 11'</label>
                                    <input
                                        id="testScore"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="testScore"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.testScore}
                                        aria-describedby="emailHelp" placeholder="testScore u oficio"/>
                                    {errors.testScore && touched.testScore && (
                                        <label className="cy">{errors.testScore}</label>
                                    )}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="cw">Fecha de presentación de pruebas saber</label>
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
        );
    }
}

export default AcademicInformation;