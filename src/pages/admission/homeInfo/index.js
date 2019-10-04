import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import schema from './schema'
import { FormikReactSelect } from '../../../components/FormikFields';
import axios from 'axios';
import swal from 'sweetalert';
const url_dev = 'http://172.23.182.193:3000/api/';


class HomeInfo extends Component {
    render() {

        const initialValues = {
            city: '',
            cityNotification: '',
            country: '',
            department: '',
            departmentNotification: '',
            countryNotification: '',

        };

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
            
            delete data.id;

            this.props.dataStep(data, "HomeInfo")

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
                                    <label className="cw">Pais de domicilio</label>
                                    <FormikReactSelect
                                        name="addressCountry"
                                        id="addressCountry"
                                        value={values.addressCountry}
                                        isMulti={false}
                                        options={countries}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.addressCountry && touched.addressCountry && (
                                        <label className="cy">{errors.addressCountry}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Departamento de domicilio</label>
                                    <FormikReactSelect
                                        name="addressDepartment"
                                        id="addressDepartment"
                                        value={values.addressDepartment}
                                        isMulti={false}
                                        options={departaments}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.addressDepartment && touched.addressDepartment && (
                                        <label className="cy">{errors.addressDepartment}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Ciudad de domicilio</label>
                                    <FormikReactSelect
                                        name="addressCity"
                                        id="addressCity"
                                        value={values.addressCity}
                                        isMulti={false}
                                        options={cities}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.addressCity && touched.addressCity && (
                                        <label className="cy">{errors.addressCity}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Dirección de notificaciones</label>
                                    <input
                                        id="notificationAddress"
                                        className="form-control"
                                        autoComplete="off"
                                        type="text"
                                        name="notificationAddress"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.notificationAddress}
                                        aria-describedby="emailHelp" placeholder="Dirección de notificaciones"/>
                                    {errors.notificationAddress && touched.notificationAddress && (
                                        <label className="cy">{errors.notificationAddress}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Pais de notificaciones</label>
                                    <FormikReactSelect
                                        name="notificationAddressCountry"
                                        id="notificationAddressCountry"
                                        value={values.notificationAddressCountry}
                                        isMulti={false}
                                        options={countries}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.notificationAddressCountry && touched.notificationAddressCountry && (
                                        <label className="cy">{errors.notificationAddressCountry}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Departamento de notificaciones</label>
                                    <FormikReactSelect
                                        name="notificationAddressDepartment"
                                        id="notificationAddressDepartment"
                                        value={values.notificationAddressDepartment}
                                        isMulti={false}
                                        options={departaments}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.notificationAddressDepartment && touched.notificationAddressDepartment && (
                                        <label className="cy">{errors.notificationAddressDepartment}</label>
                                    )}
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="cw">Ciudad de notificaciones</label>
                                    <FormikReactSelect
                                        name="notificationAddressCity"
                                        id="notificationAddressCity"
                                        value={values.notificationAddressCity}
                                        isMulti={false}
                                        options={cities}
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                    />
                                    {errors.notificationAddressCity && touched.notificationAddressCity && (
                                        <label className="cy">{errors.notificationAddressCity}</label>
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

export default HomeInfo;