import React from "react";  
import "./MainArticle.css";
import Content from "../../components/Content";

const MainArticle = () => {
    
    return (
        <article className="main-article">
            <button className="book-now-button" type="button"><span>BOOK <br/> NOW</span></button>
            <Content />
        </article>
    );
};

export default MainArticle;