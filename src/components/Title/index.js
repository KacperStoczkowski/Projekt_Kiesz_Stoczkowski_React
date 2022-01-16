import React from "react";  
import "./Title.css";

const Title = ({headerTitle, link, linkMessage, children}) => {

    return (
        <div className="title">
            <h2 className="header-title">{headerTitle}</h2>
            <p className="header-link-message"><a href={link} className="header-link">{linkMessage}</a></p>
            {children}
        </div>
    );
};

export default Title;