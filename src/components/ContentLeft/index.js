import React from "react";  
import "./ContentLeft.css";
import img1 from "../../assets/img/user-3.jpg";
import img2 from "../../assets/img/user-4.jpg";
import img3 from "../../assets/img/user-5.jpg";
import img4 from "../../assets/img/user-6.jpg";


const ContentLeft = () => {

    return (
        <div className="content-left">
            <div className="description">
                <p className="description-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit ex, commodo lobortis vestibulum vel, ornare id leo. Aenean sed pellentesque risus, ac viverra turpis. Fusce eget magna et elit vulputate condimentum. Suspendisse eu turpis eleifend, consectetur risus eget, tempor est. </p>
                <p className="description-line"> Nullam dictum tincidunt magna nec elementum. Quisque metus leo, mollis nec vestibulum ac, ultrices egestas mauris. Aliquam tincidunt lectus quis tortor sagittis suscipit. Nullam eget magna dolor. </p>
            </div>

            <div className="benefits">
                <ul className="benefits-list">
                    <li className="benefit">Close to the beach</li>
                    <li className="benefit">Free airport shuttle</li>
                    <li className="benefit">Air conditioning and heating</li>
                    <li className="benefit">We speak all languages</li>
                </ul>

                <ul className="benefits-list">
                    <li className="benefit">Breakfast included</li>
                    <li className="benefit">Free wifi in all rooms</li>
                    <li className="benefit">Pets allowed</li>
                    <li className="benefit"> Perfect for families</li>
                </ul>
            </div>

            <div className="friends">
                <p>Lucy and 3 other friends recommended this hotel.</p>
                
                <img src={img1} alt="" className="img1"/>
                <img src={img2} alt="" className="img2"/>
                <img src={img3} alt="" className="img3"/>
                <img src={img4} alt="" className="img4"/>
            </div>
        </div>
    );
};

export default ContentLeft;