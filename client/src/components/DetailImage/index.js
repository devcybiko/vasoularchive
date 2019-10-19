import React from "react";
import "./style.css";

export function RecordDetail (props) {
    const styles = {
        height: "300px",
        width: "300px",
        float: "left"
        }    
    return <img {...props} style={styles} />
    };
