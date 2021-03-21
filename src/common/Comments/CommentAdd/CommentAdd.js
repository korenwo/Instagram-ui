import React, { useState } from 'react';
import './CommentAdd.scss';
import { PostService } from '../../../services/post.service';

function CommentAdd  ({ postId, onCommentAdd }) {

    const [content, setContent] = useState('');
    
    async function submit(e) {
        e.preventDefault();
        if (!content){
            } else {
        const comment = await PostService.addComment(postId, content);
        onCommentAdd(comment);
            setContent('');
		}
    }

    return (
        <form onSubmit={submit}>
            <input
                onChange={(e) => setContent(e.target.value)}
                className="form-control"
                value= {content}>
            </input>
            <button className="postComment">Post</button>
        </form>
    );
}

export default CommentAdd;
