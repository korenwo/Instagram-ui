import { useState, useContext } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Cookies from 'js-cookie';
import { useHistory, Link } from 'react-router-dom';
import { loginSchema } from './login.schema'; 
import './Login.scss';
import sum2 from './sum2.png'
import { UserService } from '../services/user.service';
import { UserContext } from './../user-context';

function Login () {
    const history = useHistory();
	const { setUser } = useContext(UserContext);
	const [showError, setShowError] = useState(false);

    async function submit(values) {
		setShowError(false);

		const res = await UserService.login(values);
		if (res.status !== 200) {
			setShowError(true);
			return;
		}
		const json = await res.json();
		Cookies.set('instagram-user', json.token, { expires: 30 });

		const user = await UserService.me();
		setUser(user);
		history.push('/');
	}

    return (
        <div className="loginContainer">
            <img src={sum2} className="sum2Image" alt="Instagram" />
            <div className="Login">
                <h1 className="login">Login</h1>
                {showError && <div className="alert alert-denger">Incorrect username or password</div>}
                <Formik initialValues={{username: '', email: '', password: ''}} validationSchema={loginSchema} onSubmit={submit}>
                    <Form>
                        <div className="form-group1 mb-3">
                            <label htmlFor="username">Username</label>
                            <Field className="form-control" id="username" name="username" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>
                        <div className="form-group1 mb-3">
                            <label htmlFor="password">Password</label>
                            <Field type="password" className="form-control" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div className="from-group1">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                        <div className="text">
                            Don't have an account? <Link to="/register" className="Login__register-link">Register</Link>
                        </div>
                    </Form> 
                </Formik>
            </div>
        </div>
    );
}

export default Login;