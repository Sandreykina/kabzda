
import React from 'react';
import './Profile.css';
import MyPost from './../MyPosts/MyPost/MyPost';


const Profile = () => {
    return (
        <div className="profile">
            <img src="https://img5.goodfon.com/wallpaper/nbig/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg" alt="content" />
            <MyPost />
            
            
        </div>
    )
}

export default Profile;