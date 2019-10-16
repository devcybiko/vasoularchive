import React from "react";
import headerImage from "../../images/site/header.png";
import "./style.css";
// const headImage = require("../../public/images/site/header.png")

export function TopImage(props) {
    // const styles = {
    //     width: '100%',
    //     margin: '0',
    //     float: 'center',
    //     padding: '1px',
    //     border: '1px solid black',
    //     background: 'orange'
    // }
    return <div className='card'>
             <img className='card-img-top' src={headerImage} {...props} />
             <h1 className='card-title'>The Virginia Soul Archive</h1>
           </div>
    
};