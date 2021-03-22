import React, {useState} from 'react';
import './PostLike.scss';
import { PostService } from '../../services/post.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PostLike ({post, user}) {
 
    const [likes, setLikes] = useState (post?.likes?.length || 0 );

    async function addLike () {
        const res = await PostService.like(post._id);
        setLikes(res.likes.length);
    }

    return (
        <div>
            <a><FontAwesomeIcon icon={ faHeart } /></a> 
            <div className="likes">Likes {likes}</div>
        </div>
    );
}




export default PostLike;