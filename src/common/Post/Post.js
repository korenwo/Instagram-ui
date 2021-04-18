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
               
            </div>}
            <img className="image1" src={'data:; base64,' + data.image} alt=""/>
            {!small && <div className="datas">
                <PostLike post={data}></PostLike>
                <div>{data.description}</div>
                <TimeAgo datetime={data.createdAt}/>
                <Link to={'/profile/' }>
                    <Avatar image={user.avatar} />
                </Link> 
                <Comments postId={data._id}></Comments>
            </div>}
            
        </div>        
    );
}

export default Post;
