import React from "react";     
import "./Slider.css";
import img1 from '../../assets/img/hotel-1.jpg';
import img2 from '../../assets/img/hotel-2.jpg';
import img3 from '../../assets/img/hotel-3.jpg';


const Slider = () => {

    return (
        <div className="slider">
            <img src={img1} alt="" className="slider-img"/>
            <img src={img2} alt="" className="slider-img"/>
            <img src={img3} alt="" className="slider-img"/>
        </div>
    );
};

export default Slider;