import React, {useState} from 'react';
import './ProfileEdit.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { UserService } from './../services/user.service';
import Profile from './../Profile/Profile';

function ProfileEdit () {

    const history = useHistory();

    const [img, setImg] = useState(null);

    async function submit(values) {
        const data = new FormData();
        data.append('avatar', values.avatar);
        data.append('password', values.password);

        try {
            await UserService.edit(data);
            history.push('/');
        } catch(err) {
            console.log(err);
        }  
    }

return (
    <div className="editContainer">
        <h1 className="edit">Edit Profile</h1>
        
            <Formik
                initialValues={{avatar:"", password: ''}}
                onSubmit={submit}>
                {({setFieldValue, isSubmitting}) => (
                    <Form>
                        <h2 className="changeP">Change Profile Photo</h2>
                        <input type="file"
                            id="avatar"
                            name="avatar"
                            className="form-control" 
                            onChange={(e) => { setFieldValue('avatar', e.target.files[0]); setImg(URL.createObjectURL(e.target.files[0])); }} /> 
                        <img src={img} alt="Preview" className="preview-image" />   
                        
                        <div className="form-group mb-3">
                            <label htmlFor="password">New Password</label>
                            <Field type="password" className="form-control" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="web">Website</label>
                            <Field type="web" className="form-control" id="web" name="web" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="bio">Bio</label>
                            <Field type="bio" className="form-control" id="bio" name="bio" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="mail">Email</label>
                            <Field type="mail" className="form-control" id="mail" name="mail" />
                            <ErrorMessage name="mail" component="div" className="error" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="phone">Phone Number</label>
                            <Field type="phone" className="form-control" id="phone" name="phone" />
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="gen">Gender</label>
                            <Field type="gen" className="form-control" id="gen" name="gen" />
                        </div>    

                        <button type="submit" className="submitBtn" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'submit' }</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}                   

export default ProfileEdit;