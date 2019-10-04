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
                                    <label>Dirección de correo electrónico</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.email}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Dirección de domicilio</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.address}</small>
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
                                    <label>Dirección de notificaciones</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.addressNotification}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Pais de notificaciones</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.countryNotification}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Departamento de notificaciones</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.departmentNotification}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Ciudad de notificaciones</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.cityNotification}</small>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Teléfono de contacto</label>
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
                                        <small id="emailHelp" className="form-text text-muted errorInput">{errors.phone}</small>
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