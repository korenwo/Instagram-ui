import React, {useState} from 'react';
import TimeAgo from 'timeago-react'; 
import './Post.scss'; 
import PostLike from './../PostLike/PostLike';
import Avatar from '../../common/Avatar/Avatar';
import { Link } from 'react-router-dom';
import Comments from './../Comments/Comments';

function Post ({ data,  small }) {

    const [user] = useState({});    
    
    return (
        <div className={"post " + (small ? 'small' : '')}>
            {!small && <div className="photoHead">
                <Link to={'/profile/' + user.username}>
                    <Avatar image={user.avatar} />
                </Link> 
            </div>}
            <img className="image" src={'data:; base64,' + data.image} />
            {!small && <div className="datas">
                <PostLike post={data}></PostLike>
                <div>{data.userId.username} {data.description}</div>
                <TimeAgo datetime={data.createdAt}/>
                <Comments postId={data._id}></Comments>
            </div>}
            
        </div>        
    );
}

export default Post;
