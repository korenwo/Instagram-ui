import React, {useState, useEffect} from 'react';
import './Comments.scss';
import CommentAdd from './CommentAdd/CommentAdd';
import { PostService } from './../../services/post.service';
import Comment from './Comment/Comment';


function Comments ({ postId }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            try {
                const commentsArr = await PostService.getComments(postId)
                setComments(commentsArr);
            } catch(err) {
                console.log(err);
            }
        }
        getComments();
    }, [postId]);

    function onCommentAdd(Comment) {
        setComments([...comments, Comment]);
    }
    
    return (
        <div>
           <h2 className> Comments </h2>
           <div>
            {comments.map(comment => <Comment key={comment._id} comment={comment} />)}      
        </div>
        <CommentAdd postId={postId} onCommentAdd={onCommentAdd} />
        </div>
    );
}

export default Comments;
