import React from 'react';
import './SearchResult.scss'
import Avatar from '../../common/Avatar/Avatar';
import { Link } from 'react-router-dom';

function SearchResult ({ user }) {
    return (
            <div className="searchUse">
                <Link to={'/Profile/' + user.username}>
                    <div className="SearchResult_avatar">
                        <Avatar size="sm" image={user.avatar} />
            </div>
            <div>
                    <strong>{ user.username }</strong>
                    <p className="SearchResult__bio">{user.bio}</p>
            </div>
        </Link>
    </div>
    );
}

export default SearchResult;
