import React from 'react';
import TimeAgo from 'timeago-react'; 
import './Post.scss'; 
import PostLike from './../PostLike/PostLike';

function Post ({ data }) {
    console.log(data)
    return (
        <div className="post">
            <div className="photoHead"></div>
            <img className="image" src={'data:; base64,' + data.image} />
            <div className="datas">
            <PostLike post={data}></PostLike>
            <div>{data.userId.username}</div>
            <TimeAgo datetime={data.createdAt}/>
            <div>{data.description}</div>
            
        </div>
    </div>        
    );
}

export default Post;
