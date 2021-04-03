import React from 'react';
import MyFriendItem from './MyFriendItem/MyFriendItem';
import style from './MyFriends.module.css';


const MyFriends = (props) => {
  debugger;
    let MyFriendElement = props.state.myfriendsData.map ( f => <MyFriendItem id = {f.id} name = {f.name} />)
    
    return (
        <div className = 'aa'>
            {MyFriendElement}
        </div>
    )
}

export default MyFriends;