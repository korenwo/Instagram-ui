import React from 'react';
import './Register.scss'
import { Field, Formik, ErrorMessage } from 'formik';
import { RegisterSchema } from './register.schema';

function Register (props) {
    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={{username: '', email: '', password: '', agreeToTerms: false}}
                validationSchema={RegisterSchema}>
            <form>
                <div className= "form-group mb-3">
                    <label htmlFor="username">username</label>
                    <Field className= "form-control" id="username" name= "username" />
                    <ErrorMessage name="username" component="div" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">password</label>
                    <Field type="password" className= "form-control" id="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">email</label>
                    <Field type="email" className= "form-control" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div className="form-group form-check mb-3">
                    <Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms" />
                    <label className= "form"></label>
                </div>
                <div className ="form-group">
                    <button className= "btn btn-success">Register</button>
                </div>
            </form>
            </Formik>
        </div>
    );
}

export default Register;
