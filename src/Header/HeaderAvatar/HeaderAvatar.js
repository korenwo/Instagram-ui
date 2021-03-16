import React, {useContext } from 'react';
import './HeaderAvatar.scss'
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../user-context';
import { Link } from 'react-router-dom';

function HeaderAvatar() {

    const { user } = useContext(UserContext);

    return (
        <div className="HeaderAvatar">
            <Link to={'/profile/' + user.username}>
            <Avatar />
           </Link> 
        </div>

    );
}
export default HeaderAvatar;