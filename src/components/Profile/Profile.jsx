
import React from 'react';
import './Profile.css';
import MyPost from './../MyPosts/MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPost />
            
            
        </div>
    )
}

export default Profile;