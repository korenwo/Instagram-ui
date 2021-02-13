import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import { useHistory } from 'react-router-dom';
import './Login.scss';
import { loginSchema } from './login.schema'; 
import { UserService } from '../services/user.service';

function Login () {
    const history = useHistory();
    const [showError, setShowError] = useState(false);

    function submit(values) {
        UserService.login(values)
            .then(isSuccess => {
                if (isSuccess) {
                    history.push('/');
                } else {
                    setShowError(true);
                }
            });
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            {showError && <div className="alert alert-denger">Incorrect username or password</div>}
            <Formik initialValues={{username: '', email: '', password: ''}} validationSchema={loginSchema} onSubmit={submit}>
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
                    <div className="from-group">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </Form> 
            </Formik>
        </div> 
    );
}

export default Login;