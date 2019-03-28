import React from 'react';
import './style.css';

export default class ButtonToTop extends React.Component{

    render(){
        return (
            <div className="top-btn" id="btn-top">
                <a className="btn-top" href="#welcome">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        )
    }
}