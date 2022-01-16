import React from "react";  
import Opinion from "../Opinion";
import './ContentRight.css';
import { Link } from "react-router-dom";

const ContentRight = ({ opinions = [] }) => {

    return (
        <div className="content-right">
            {opinions.map((opinion) => (
                <Opinion
                    opinion={opinion}
                    key={opinion.name}
                />
            ))}
            <p className="show-all"><Link to="/" className="show-all-link">Show all &#8594;</Link></p>
        </div>
    );
};

export default ContentRight;