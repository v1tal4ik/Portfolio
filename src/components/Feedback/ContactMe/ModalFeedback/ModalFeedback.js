import React ,{Fragment}from 'react';
import './style.css';

export default class ModalFeedback extends React.Component{
    render(){
        const {open,onClose,text} = this.props
        if(open){
            return (
                <Fragment>
                     <div className="feedback-modal">
                    <p className='feedback-modal-text'>{text}</p>
                    </div>
                <button className='feedback-modal-btn' onClick={onClose}>Гаразд</button>
                </Fragment>
            )
        }else{
            return null;
        }
    }
}