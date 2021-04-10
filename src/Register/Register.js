import { React, useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import './Register.scss'
import { registerSchema } from './register.schema';
import { UserService } from '../services/user.service';

function Register (props) {

    const history = useHistory();

    const [errorMsg, setErrorMsg] = useState();

    function submit(values) {
        setErrorMsg('');
        UserService.Create(values)
            .then(data => {
                if(data.status === 201) {
                    history.push('/login');
                } else {
                    setErrorMsg(data.message||'Error');
                }
            });
    }

    return (
        <div className="register">
            <h2>Sign Up</h2>
            <Formik initialValues={{username: '', email: '', password: '', agreeToTerms: false}} validationSchema={registerSchema} onSubmit={submit}>
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
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </div>
                    <p className="error">{errorMsg}</p>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;
