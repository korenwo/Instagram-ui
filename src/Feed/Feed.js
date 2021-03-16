import React, { useEffect, useState }  from 'react'
import { PostService } from '../services/post.service';
import './Feed.scss';
import Post from '../common/Post/Post';
import { Link, useParams } from 'react-router-dom';
import Avatar from './../common/Avatar/Avatar';
import { UserService } from './../services/user.service';



function Feed () {

    const [posts, setPosts] = useState([]);
    const { username } = useParams();
    const [user, setUser] = useState({});    


    useEffect(()=> {
        async function getPosts() {
            setPosts(await PostService.feed());
        }
        getPosts();
    }, []);

    useEffect(() => {
        async function getUser() {
            const user = await UserService.get(username);
            setUser(user);
        }
        getUser();
    },  [username]);

    return (
        <div>
            <div className= "posts">
                <Link to={'/profile/' + user.username}>
                { user.username }
                </Link> 
                {posts.map(post => (
                    <Post key={post._id} data={post}/>
                ))}
            </div>
    </div>
    );
}

export default Feed;
