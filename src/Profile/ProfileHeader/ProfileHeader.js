import React, { useEffect, useState } from 'react';
import { UserService } from '../../services/user.service';
import Avatar from '../../common/Avatar/Avatar';
import './ProfileHeader.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
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
                <button> <Link to="/ProfileEdit" >Edit Profile</Link></button>
                <Link to="/ProfileEdit">
                    <FontAwesomeIcon icon={faCog} />
                </Link>
                <p className="userPost">{postNum} posts</p>
                <Followers user={user} />
            </div>    
        </div>    
    );
}

export default ProfileHeader;
