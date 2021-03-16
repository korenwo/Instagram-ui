import React, {useState} from 'react';
import './PostLike.scss';
import { PostService } from '../../services/post.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PostLike ({post}) {

    const [likes, setLikes] = useState(post.likes);

    async function addLike() {
		const res = await PostService.like(post._id);
        setLikes(res.likes);
	}

    return (
        <div>
            <FontAwesomeIcon icon={ faHeart } /><button onClick={addLike}>Likes {likes}</button>
        </div>
    );
}


export default PostLike;
