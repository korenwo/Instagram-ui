import React from 'react';
import Avatar from './../../Avatar/Avatar';
import Comments from './../Comments';

function Comment  ({ Comment }) {
    return (
        <div>
                <Avatar image={Comment.user.avatar} />
                <p>{Comment.Comment}</p>
                <span>{Comment.createAt}</span>
        </div>
    );
}

export default Comment;
