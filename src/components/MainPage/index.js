import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Slider from "../../components/Slider";
import './MainPage.css';
import Title from "../Title";

const MainPage = ({ children, isSearchVisible = false, onSearchChange, contentClassName = '', titleProps = {} }) => {

    return (
       <div className="site">
            <div className="main-page">
                <Header isSearchVisible={isSearchVisible} onSearchChange={onSearchChange}/>

                <div className="page">
                    <Navigation />
                    <section className="workspace">
                        <Slider />
                      <Title {...titleProps}/>
                      <div className="content-wrapper">
                        <div className={`content ${contentClassName}`}>
                            {children}
                        </div>
                      </div>
                    </section>
                </div>
            </div>
       </div>
    );
};

export default MainPage;
