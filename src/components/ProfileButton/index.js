import React from "react"; 
import "./ProfileButton.css";
import profileImg from "../../assets/img/user.jpg";

const ProfileButton = () => {
    
    return (
        <button className="profile-button">
            <img src={profileImg} alt="" className="profile-image"/>
            <span className="profile-name">Hi John</span>
        </button>
    );
};

export default ProfileButton;