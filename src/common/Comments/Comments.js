import React, {useState, useEffect} from 'react';
import './Comments.scss';
import CommentAdd from './../CommentAdd/CommentAdd';
import { PostService } from './../../services/post.service';


function Comments ({ postId }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            try {
                const comments = await PostService.getComments(postId);
                
            } catch(err) {
                console.log(err);
            }
        }
        getComments();
    }, [postId]);

    
    

    return (
        <div>
           <h2 className> Comments </h2>
          
        </div>
    );
}

export default Comments;
