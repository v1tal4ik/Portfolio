import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



export default class TopHeader extends React.Component{
    render(){
            return <div className="header-top" id="header-top">
            <a href="#welcome" className="my-name">v1tal4ik</a>
            <ul className="header-ul">
                <li className="header-item"><a href="#welcome">Home</a></li>
                <li className="header-item"><a href="#resume">Resume</a></li>
                <li className="header-item"><a href="#certificates">Certificates</a></li>
                <li className="header-item"><a href="#portfolio">Portfolio</a></li>
                <li className="header-item"><a href="#contact-me">Contact Me</a></li>
            </ul>
            <Link to='/login'><button className="header-btn">Увійти <i className="fas fa-sign-in-alt"></i></button></Link>
        </div>
    }
}