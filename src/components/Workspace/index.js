import React from "react";  
import Slider from "../../components/Slider";
import "./Workspace.css";

const Workspace = (children) => {

    return (
        <section className="workspace">
            <Slider />
            {children}
        </section>
    );
};

export default Workspace;