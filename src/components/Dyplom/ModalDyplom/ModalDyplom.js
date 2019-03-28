import React from 'react';
import './style.css';

export default class ModalDyplom extends React.Component{
    render(){
        const {open,onClose,img} =this.props;
        if(open){
            return (
                <div className="dyplom-modal">
                    <img className="dyplom-modal-img" src={img} alt=""/>
                    <i className=" close fas fa-times" onClick={onClose}></i>
                </div>
            )
        }else{
            return null;
        }
    }
}