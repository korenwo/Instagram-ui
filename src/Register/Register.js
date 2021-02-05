import React from 'react';
import './Register.scss'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { RegisterSchema } from './register.schema';

function Register (props) {
    return (
        <div className="register">
            <h2>Register</h2>
            <Formik initialValues={{username: '', email: '', password: '', agreeToTerms: false}} validationSchema={RegisterSchema}>
                <Form>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username</label>
                        <Field className="form-control" id="username" name="username" />
                        <ErrorMessage name="username" component="div" className="error" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <Field type="password" className="form-control" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <Field type="email" className="form-control" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="form-group form-check mb-3">
                        <Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms" />
                        <label htmlFor="agreeToTerms">Do you agree to our Terms , Data Policy and Cookies Policy?</label>
                        <ErrorMessage name="agreeToTerms" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;
