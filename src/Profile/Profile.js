
import React, { useEffect, useState } from 'react'
import './Profile.scss';
import { useParams } from 'react-router-dom';
import { UserService } from '../services/user.service';
import Post from '../common/Post/Post';
import ProfileHeader from './ProfileHeader/ProfileHeader';

function Profile () {

    const { username } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        async function getPosts() {
            try {
            const posts = await UserService.getPosts(username);
            setPosts(posts);
        } catch(err) {
            console.log(err);
        }
    }
    
    getPosts();
}, [username]);

    return (
    <>
        <ProfileHeader username={username} postNum={posts.length} />
        <hr />
        <div className="row">
            {posts.map(post => (
                <Post key={post._id} data={post} />
            ))}
        </div>
    </>
    );
}
     
export default Profile;
