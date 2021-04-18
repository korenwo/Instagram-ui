import React, {useState} from 'react';
import './Followers.scss';
import { UserService } from '../../services/user.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Followers ({user}) {
    
    const [followers, setFollowrs] = useState(user?.followers?.length || 0 );

    async function addFollower () {
        const res = await UserService.follow(user._id);
        setFollowrs(res.followers.length);
    }
    
    return (
        <div>
             <div onClick={addFollower }><FontAwesomeIcon icon={ faEye } color={followers ? 'blue' : 'white'} /></div> 
            <div className="followers">Followers {followers}</div>
        </div>
    );
}

export default Followers;
