import React, {useState, useEffect} from 'react';
import TimeAgo from 'timeago-react'; 
import './Post.scss'; 
import PostLike from './../PostLike/PostLike';
import Avatar from '../../common/Avatar/Avatar';
import { Link } from 'react-router-dom';


function Post ({ data, username }) {

    const [user, setUser] = useState({});    


    console.log(data)
    return (
        <div className="post">
            <div className="photoHead">
            <Link to={'/profile/' + user.username}>
            <Avatar />
           </Link> 
        </div>

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
