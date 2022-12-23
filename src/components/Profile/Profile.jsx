import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ admin, isLoggedIn }) => {
  return (
    <div className="profile">
      <ProfileInfo admin={admin} isLoggedIn={isLoggedIn}/>
    </div>
  );
};

export default Profile;
