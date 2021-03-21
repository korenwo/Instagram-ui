import React, {useState} from 'react';
import './PostLike.scss';
import { PostService } from '../../services/post.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PostLike ({post, user}) {

    const [likes, setLikes] = useState(post.likes);

    async function addLike() {
		const res = await PostService.like(post._id);
        setLikes(res.likes);
	}

    return (
        <div>
            <a><FontAwesomeIcon icon={ faHeart } onClick={addLike} /></a> 
            <div className="likes">Likes {likes}</div>
        </div>
    );
}


export default PostLike;
