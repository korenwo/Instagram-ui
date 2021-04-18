import React, { useEffect, useState } from 'react';
import { UserService } from '../../services/user.service';
import Avatar from '../../common/Avatar/Avatar';
import './ProfileHeader.scss';
import Followers from '../Followers/Followers';

function ProfileHeader ({ username, postNum }) {

    const [user, setUser] = useState({});  
    
    useEffect(() => {
        async function getUser() {
            const user = await UserService.get(username);
            setUser(user);
        }
        getUser();
    },  [username]);

    return (
        <div className="ProfileHeader">
            <span className="bigAvatar"><Avatar image={user.avatar} /></span>
            <div>
                <h2>{user.username}</h2>
                <p className="userPost">{postNum} posts</p>
                <Followers user={user} />
            </div>    
        </div>    
    );
}

export default ProfileHeader;
