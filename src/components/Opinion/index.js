import React from "react"; 
import "./Opinion.css";

const Opinion = ({ opinion: { name, message, date, rate, logo }}) => {
    return (
        <div className="opinion">
            <p>{message}</p>

            <div className="opinion-body">
                <img src={logo} alt="" className="profile-picture"/>
                
                <div className="author">
                    <p className="name">{name}</p>
                    <p className="date">{date}</p>
                </div>

                <div className="rank">
                    <p className="rank-value">{rate}</p>
                </div>
            </div>
        </div>
    );
};

export default Opinion;