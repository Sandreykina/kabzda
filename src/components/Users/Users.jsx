import React from 'react';
import UserItem from './UserItem/UserItem';

const Users = (props) => {
    const UserElement = props.users.map ( f => <UserItem key = {f.id} name = {f.name} followed = {f.followed} photoURL = {f.photoURL}/>)
    
    return (
        <div className = 'aa'>
            {UserElement}
        </div>
    )
}

export default Users;
