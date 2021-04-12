import React, {useState} from 'react';
import './ProfileEdit.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { UserService } from './../services/user.service';

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
                        <h2 className="change">Change Profile Photo</h2>
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

                        <button type="submit" className="submitBtn" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'submit' }</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}                   

export default ProfileEdit;