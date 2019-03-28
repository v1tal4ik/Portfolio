import React from 'react';
import './style.css';

export default class WelcomePage extends React.Component{
    render(){
        return (
            <div className="welcome_page" id="welcome">
            <div className="welcome_page_title">
                <h4 className="welcome_page_subtitle">Сайт-портфоліо</h4>
                <h1 className="welcome_page_main_text">Junior Frontend Developer</h1>
                <p className="welcome_page_describe">JavaScript, React.Js, Node.Js</p>
            </div>
            <div id="section07" className="demo">
                <a href="#section08"><span></span><span></span><span></span></a>
            </div>
            </div>
        )
    }
}