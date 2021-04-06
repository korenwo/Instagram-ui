import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import './Search.scss';
import { UserService } from '../../services/user.service';
import SearchResult from './SearchResult/SearchResult';
import  Cookies  from 'js-cookie';

function Search () {

    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
    
    useEffect(()=> {
        if (!query) {
            setUsers([]);
            return;
        }
        async function getUsers() {
            try {
                setUsers (await UserService.search(query));
            }
            catch (err) { }
        }
        getUsers();
    }, [query]);
    
    function hasNoResult () {
        return users.length === 0 && query.length > 0;
    }

    function logOut() {
        Cookies.set('instagram-user', '', { expires: 30 });
        history.push('/Login');
    }

    return (
        <div className="searchBox">
            <div className="Search">
                <input className="searchUser" value={query} onChange={(e) => setQuery (e.target.value)} />
                {users.map(user=>{
                    return <SearchResult key={user._id} user={user} />
                })}
                {hasNoResult () && 'Sorry, no user!'}
            </div>
            <ul className="icons">
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </Link>
                </li>
                <li>
                    <Link to="/post/create">
                        <FontAwesomeIcon icon={ faPlusSquare } size="lg" />
                    </Link>
                </li>
                <li>
                    <Link to="/Search">
                        <FontAwesomeIcon icon= { faSearch } size="lg" />
                    </Link>
                </li>
                <li>
                <FontAwesomeIcon icon= { faSignOutAlt } size="lg"  className="out" onClick={logOut}></FontAwesomeIcon>
                </li>
            </ul>
        </div>
    );
}   
export default Search;
