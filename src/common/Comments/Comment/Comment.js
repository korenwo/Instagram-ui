import React from 'react';
import './Comment.scss';

function Comment  ({ comment }) {
    return (
        <div>
            {comment.user.username}: {comment.content} - {comment.createAt}
        </div>
    );
}

export default Comment;
