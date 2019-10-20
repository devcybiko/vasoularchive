import React from "react";
import headerImage from "../../images/site/header.png";
import "./style.css";
// const headImage = require("../../public/images/site/header.png")

export function TopImage(props) {

    return <div className='card'>
             <img className='card-img-top' id="header" src={headerImage} {...props} />
             <h1 className='card-title' id='title'>The Virginia Soul Archive</h1>
           </div>
    
};