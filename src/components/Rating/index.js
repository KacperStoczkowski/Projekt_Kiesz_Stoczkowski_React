import React from "react";
import "./Rating.css";
import { Link } from "react-router-dom";

const Rating = () => {
    return (
        <>
            <p className="spot"><Link to="/" className="spot-link">Albufeira, Portugal</Link></p>
            <div className="rating">
                <p className="rate">8.6</p>
                <p className="votes">429 VOTES</p>
            </div>
        </>
    );
};

export default Rating;