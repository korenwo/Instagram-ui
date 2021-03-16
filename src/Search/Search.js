import React, { useState, useEffect, Form } from 'react';
import'./Search.scss';
import { UserService } from '../services/user.service';
import SearchResult from './SearchResult/SearchResult';

function Search () {

    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        if (!query) {
            setUsers([]);
        return;
    }

        async function getUsers() {
            try {
                setUsers (await UserService.search(query));
            } catch (err) {
        }
    }
        getUsers();
}, [query]);

function hasNoResult () {
    return users.length === 0 && query.length > 0;
}

return (
    <div>
                    <input value= {query} onChange={(e) => setQuery (e.target.value)} />
                    {users.map(user=>{
                        return <div key={user._id}>{user.username}</div>
                    })}
                    {hasNoResult () && 'Sorry, no user!'}
                </div> 
        );
    }    

export default Search;
