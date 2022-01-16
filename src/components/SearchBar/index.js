import React from "react";
import "./SearchBar.css";

const SearchBar = ({onChange}) => {

    return (
        <input type="text" className="search-bar" placeholder="Search rooms" onChange={onChange}/>
    );
};

export default SearchBar;