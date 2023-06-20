import React from "react";
import '../css/styles.css'

export default function Media(){
    return(
        <div className="media--div">
            <button className="email--btn fa"> &#9993; Email</button>
            <button className="linkedin--btn fa">&#xf08c; Linkedin</button>
        </div>
    );
}