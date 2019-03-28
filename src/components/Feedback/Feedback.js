import React , {Fragment}from 'react';
import ContactMe from './ContactMe'
import MyContact from './MyContact'
import './style.css';

export default class Feedback extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="feedback" id="contact-me">
                <ContactMe />
                <MyContact />
                </div>
            </Fragment>
        )
    }
}