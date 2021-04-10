import React, {useState, useContext, useEffect} from 'react';
import './PostLike.scss';
import { PostService } from '../../services/post.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../user-context';

function PostLike ({post}) {
 
    const [likes, setLikes] = useState (post?.likes?.length || 0 );
    const [liked, setLiked] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(()=> {
        setLiked(post.likes.includes(user._id));
    });

    async function addLike () {
        const res = await PostService.like(post._id);
        setLikes(res.likes.length);
        setLiked(true);
    }

    return (
        <div>
            <a onClick={addLike}><FontAwesomeIcon icon={ faHeart } color={liked ? 'red' : 'white'} /></a> 
            <div className="likes">Likes {likes}</div>
        </div>
    );
}




export default PostLike;