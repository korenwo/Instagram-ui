import { React, useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import './Register.scss'
import { registerSchema } from './register.schema';
import { UserService } from '../services/user.service';

function Register (props) {

    const history = useHistory();

    const [errorMsg, setErrorMsg] = useState(0);

    function submit(values) {
        UserService.register(values)
            .then(data => {
                if(data.isSccuess) {
                    history.push('/login');
                    return;
                }
                setErrorMsg(data.message);
            });
    }

    return (
        <div className="register">
            <h2>Register</h2>
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
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                    <p className="error">{errorMsg}</p>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;
