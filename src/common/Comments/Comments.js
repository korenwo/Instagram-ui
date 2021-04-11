import React, {useState, useEffect} from 'react';
import './Comments.scss';
import CommentAdd from './CommentAdd/CommentAdd';
import { PostService } from './../../services/post.service';
import Comment from './Comment/Comment';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Comments ({ postId }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            try {
                const commentsArr = await PostService.getComments(postId);
                setComments(commentsArr);
            } catch(err) {
                console.log(err);
            }
        }
        getComments();
    }, [postId]);

    function onCommentAdd(comment) {
        setComments([...comments, comment]);
    }
    
    return (
        <div>
            <details>
                <summary className="comment">Add a Comment... <FontAwesomeIcon icon={ faComment } size="sm"  /></summary>

           
                
                    <div className="comment">{comments.map(comment => <Comment key={comment._id} comment={comment} />)}</div>
                        <CommentAdd postId={postId} onCommentAdd={onCommentAdd} />
            </details> 
        </div>
        
    );
}

export default Comments;
