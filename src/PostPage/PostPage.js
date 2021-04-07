import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostPage.scss';
import { PostService } from './../services/post.service';
import Avatar from './../common/Avatar/Avatar';
import PostLike from './../common/PostLike/PostLike';
import Comments from './../common/Comments/Comments';

function PostPage () {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=> {
        async function getPost() {
            try {
                    const p = await PostService.get(id);
                    if(p) {
                            setPost(p);
                    } else {
                            console.log('POST DOES NOT EXIST!');    
                    }
            } catch(err) {
                console.log(err);
            }
        }
        getPost();
    }, [id]);

    return (
        <>
            { post && (
                <div>
                    
                    <div>
                        <Avatar size="sm" image={post.user.Avatar} />
                        {post.user.username}
                    </div>
                    <div>{post.createAt}</div>
                    <div>{post.user.description}</div>
                    <div>
                        <img src={'data:; base64,' + post.image} className="Post__image"  alt="" /> 
                    </div>
                    <PostLike post={post}></PostLike>
                    <Comments postId={post._id} />
                </div>    
            )}
        </>
    );
}

export default PostPage;
