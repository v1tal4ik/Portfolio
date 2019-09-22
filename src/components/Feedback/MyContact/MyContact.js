import React from 'react';
import './style.css';


const MyContact = () => (
    <div className = "my-contact">
        <div className = "contact-block">
            <i className = "fas fa-map-marker-alt"></i>
            <div className = "contact-text">
                <h4>Address</h4>
                <p>Luchakivskiy str., Ternopil, Ternopil region, 460033</p>
            </div>
        </div>
        <div className = "contact-block">
            <i className = "fas fa-mobile-alt"></i>
            <div className = "contact-text">
                <h4>Lets Call</h4>
                <p>+38 (095) 156-56-64</p>
            </div>
        </div>
        <div className = "contact-block">
            <i className = "fas fa-envelope"></i>
            <div className = "contact-text">
                <h4>Email <span className = 'gmail'>(gmail.com)</span></h4>
                <p className = 'full-email'>vitalii.suhodolskiy@gmail.com </p>
                <p className = 'part-email'>vitalii.suhodolskiy</p>
            </div>
        </div>
    </div>
)

export default MyContact;
