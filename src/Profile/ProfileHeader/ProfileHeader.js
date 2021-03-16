
import React, { useEffect, useState } from 'react';
import { UserService } from '../../services/user.service';
import Avatar from '../../common/Avatar/Avatar';
import './ProfileHeader.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Profile from './../Profile';

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
            <h2>{user.username}</h2>
            <span className="bigAvatar"><Avatar image={user.avatar} /></span>
            <button> <Link to="/ProfileEdit" >Edit Profile</Link></button>
            <Link to="/ProfileEdit">
                <FontAwesomeIcon icon={faCog} />
            </Link>
            <p className="userPost">{postNum} posts</p>
        </div>    
    );
}

export default ProfileHeader;
