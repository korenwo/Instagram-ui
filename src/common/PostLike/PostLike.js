import React, {useState} from 'react';
import './PostLike.scss';
import { PostService } from '../../services/post.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PostLike ({post}) {
 
    const [likes, setLikes] = useState (post?.likes?.length || 0 );
    const [liked, setLiked] = useState(false);

    async function addLike () {
        const res = await PostService.like(post._id);
        setLikes(res.likes.length);
        setLiked(true);
    }

    return (
        <div>
            <div onClick={addLike}><FontAwesomeIcon icon={ faHeart } color={liked ? 'red' : 'white'} /></div> 
            <div className="likes">Likes {likes}</div>
        </div>
    );
}




export default PostLike;