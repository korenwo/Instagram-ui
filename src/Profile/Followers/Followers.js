import React, {useState, useEffect} from 'react';
import './Followers.scss';
import { UserService } from '../../services/user.service';

function Followers ({user}) {
    
    const [followers, setFollowrs] = useState (user?.followers?.length || 0 );

    useEffect(()=> {
        if(user.followers) {}
        setFollowrs(user?.followers?.length);
    }, [user]);

    async function addFollower () {
        const res = await UserService.follow(user._id);
        setFollowrs(res.followers.length);
    }
    
    return (
        <div>
            {followers && <span>followers: {followers}</span>}
            <button onClick={addFollower}>Follow</button>
        </div>
    );
}

export default Followers;
