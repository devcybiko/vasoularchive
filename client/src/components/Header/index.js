import React from "react";
import headerImage from "../../images/site/header.png"
// const headImage = require("../../public/images/site/header.png")

export function TopImage(props) {
    const styles = {
        width: '80%',
        margin: 'auto',
        float: 'center'
    } 
    return <div className='container'><img src={headerImage} style={styles} {...props} /></div>
    };