import React from 'react';
import './Comment.scss';

function Comment  ({ comment }) {
    return (
        <div className="comment">
            {comment.user.username}: {comment.content} - {comment.createAt}
        </div>
    );
}

export default Comment;
