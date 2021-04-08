import React, {useState} from 'react';
import './PostCreate.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { PostCreateSchema } from './post-create.schema';
import environment  from './../environments/index';
import { UserService } from './../services/user.service';
import likes from './likes.jpg'

function PostCreate () {

    const history = useHistory();

    const [img, setImg] = useState(null);

    async function submit(values) {
        const data = new FormData();
        data.append('image', values.image);
        data.append('description', values.description);

        try {
            await fetch(environment.apiUrl + '/post', {
                method: 'PUT',
                body: data,
                headers: {
                    Authorization : UserService.getToken()
                }            
            });
            history.push('/');
        } catch(err) {
            console.log(err);
        }  
    }

    return (
        <div className="new">New Post
            <img src={likes} className="likes" alt="likes" />
            <Formik
                initialValues={{image:"", description: ''}}
                validationSchema={PostCreateSchema}
                onSubmit={submit}>
                {({setFieldValue, isSubmitting}) => (
                    <Form>
                        <input type="file"
                            id="image"
                            name="image"
                            className="form-control" 
                            onChange={(e) => { setFieldValue('image', e.target.files[0]); setImg(URL.createObjectURL(e.target.files[0])); }} /> 
                            <img src={img} alt="Preview" className="preview-image1" />   
                        <div className="create">description</div>
                        <ErrorMessage component="small" name="image" className="PostCreate" />
                        <label className="form-label" htmlFor="discription"></label>
                        <Field as="textarea" className="form-control" name="description" id="description" />
                        <ErrorMessage component="small" name="description" className="PostCreate_formError" />
                        <button type="submit" className="submitBtn" disabled={isSubmitting}>{isSubmitting ? 'posting...' : 'post' }</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}                   

export default PostCreate;