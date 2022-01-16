import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {

    return (
        <section className="navigation">
            <div className="menu">
                <ul className="nav">
                  <li className="line"><Link to="/" className="link">ABOUT US</Link></li>
                  <li className="line"><Link to="/hotel" className="link">HOTEL</Link></li>
                  <li className="line"><Link to="/contact-us" className="link">CONTACT US</Link></li>
                  <li className="line"><Link to="/rooms" className="link">ROOMS</Link></li>
                </ul>
            </div>

            <p className="rights"> &#169;	All rights reserved.</p>
        </section>
    );
};

export default Navigation;