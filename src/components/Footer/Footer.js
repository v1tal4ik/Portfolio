import React from 'react';
import heart from '../../img/heart.png'
import './style.css';

export default class Footer extends React.Component{
    render(){
        return (
            <div className="footer" id="footer">
            <div className="social">
                <a href="https://www.google.com.ua" className="social-icon">
                <i className="fab fa-facebook-f"></i>
            </a>
                <a href="https://www.google.com.ua" className="social-icon">
                <i className="fab fa-instagram"></i>
            </a>
                <a href="https://www.google.com.ua" className="social-icon">
                <i className="fab fa-google"></i>
            </a>
                <a href="https://www.google.com.ua" className="social-icon">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.google.com.ua" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
            </a>
            </div>
            <div className="by">
                Create by v1tal4ik <img src={heart} alt="heart" className="heart"/>
            </div>
        </div>
        )
    }
}