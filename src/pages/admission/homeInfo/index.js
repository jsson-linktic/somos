import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import schema from './schema'
import { FormikReactSelect } from '../../../components/FormikFields';

class HomeInfo extends Component {
    render() {

        const initialValues = {};

        const countries = [
            { value: 'Colombia', label: 'Colombia' }
        ]

        const departaments = [
            { value: 'Cundinamarca', label: 'Cundinamarca' }
        ]

        const cities = [
            { value: 'Bogotá', label: 'Bogotá' }
        ]

        const handleClick = values => {
            console.log('values :', values);

            const data = {
                ...values,
                city: values.city.value,
                cityNotification: values.cityNotification.value,
                country: values.country.value,
                department: values.department.value,
                departmentNotification: values.departmentNotification.value,
                countryNotification: values.countryNotification.value,
                userDataId: this.props.userDataId
            }
            console.log('data :', data);
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
                                    <label className="cw">Dirección de correo electrónico</label>
                                    <input
                                        id="email"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        aria-describedby="emailHelp" placeholder="Dirección de correo electrónico"/>
                                    {errors.email && touched.email && (
                                        <label className="cy">{errors.email}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Dirección de domicilio</label>
                                    <input
                                        id="address"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        aria-describedby="emailHelp" placeholder="Dirección de domicilio"/>
                                    {errors.address && touched.address && (
                                        <label className="cy">{errors.address}</label>
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
                                    <label className="cw">Dirección de notificaciones</label>
                                    <input
                                        id="addressNotification"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="addressNotification"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.addressNotification}
                                        aria-describedby="emailHelp" placeholder="Dirección de notificaciones"/>
                                    {errors.addressNotification && touched.addressNotification && (
                                        <label className="cy">{errors.addressNotification}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Pais de notificaciones</label>
                                    <FormikReactSelect
                                        name="countryNotification"
                                        id="countryNotification"
                                        value={values.countryNotification}
                                        isMulti={false}
                                        options={countries}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.countryNotification && touched.countryNotification && (
                                        <label className="cy">{errors.countryNotification}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Departamento de notificaciones</label>
                                    <FormikReactSelect
                                        name="departmentNotification"
                                        id="departmentNotification"
                                        value={values.departmentNotification}
                                        isMulti={false}
                                        options={departaments}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.departmentNotification && touched.departmentNotification && (
                                        <label className="cy">{errors.departmentNotification}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Ciudad de notificaciones</label>
                                    <FormikReactSelect
                                        name="cityNotification"
                                        id="cityNotification"
                                        value={values.cityNotification}
                                        isMulti={false}
                                        options={cities}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.cityNotification && touched.cityNotification && (
                                        <label className="cy">{errors.cityNotification}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Teléfono de contacto</label>
                                    <input
                                        id="phone"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        aria-describedby="emailHelp" placeholder="Teléfono de contacto"/>
                                    {errors.phone && touched.phone && (
                                        <label className="cy">{errors.phone}</label>
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
            </>
        )
    }
}

export default HomeInfo;