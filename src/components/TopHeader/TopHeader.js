import React from 'react';
import './style.css';



const TopHeader = () => (
    <div className = "header-top" id="header-top">
        <ul className = "header-ul">
            <li className = "header-item"><a href = "#welcome"> Home </a></li>
            <li className = "header-item"><a href = "#resume"> Resume </a></li>
            <li className = "header-item"><a href = "#certificates"> Certificates </a></li>
            <li className = "header-item"><a href = "#works">Works</a></li>
            <li className = "header-item"><a href = "#contact-me">Contact Me</a></li>
        </ul>
    </div>
)

export default TopHeader;