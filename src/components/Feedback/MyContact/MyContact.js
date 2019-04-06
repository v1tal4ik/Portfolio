import React from 'react';
import './style.css';

export default class MyContact extends React.Component{
    render(){
        return (
            <div className="my-contact">
                <div className="contact-block">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="contact-text">
                        <h4>Address</h4>
                        <p>вул.Лучаківського, Тернопіль, Тернопільська область, 46003</p>
                    </div>
                </div>
                <div className="contact-block">
                    <i className="fas fa-mobile-alt"></i>
                    <div className="contact-text">
                        <h4>Lets Call</h4>
                        <p>+38 (095) 156-56-64</p>
                    </div>
                </div>
                <div className="contact-block">
                    <i className="fas fa-envelope"></i>
                    <div className="contact-text exept-mail">
                        <h4>Email</h4>
                        <p>vitalii.suhodolskiy@gmail.com </p>
                    </div>
                </div>
            </div>
        )
    }
}