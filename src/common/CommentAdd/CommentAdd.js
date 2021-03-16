import React, { useState } from 'react';
import './CommentAdd.scss';
import { PostService } from './../../services/post.service';

function CommentAdd  ({ postId }) {

    const [content, setContent] = useState('');

    function submit(e) {
        e.preventDefault();
        PostService.addComment(postId, content)
    }

    return (
        <form onSubmit={submit}>
            <div>
                <textarea
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                    value= {content}>
                </textarea>
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
    );
}

export default CommentAdd;
