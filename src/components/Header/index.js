import React from "react";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import ProfileButton from "../../components/ProfileButton";
import "./Header.css"

const Header = ({ isSearchVisible = false, onSearchChange }) => {
    return (
        <header className="main-header">
            <Logo />
            {isSearchVisible && <SearchBar onChange={onSearchChange} />}
            <ProfileButton />
        </header>
    );
};

export default Header;