import React from 'react';
import './style.css';

export default class Modal extends React.Component{
    render(){
        //console.log(this.props);
        const{title,subtitle,description,steps,PS}= this.props.obj
        return (
            <div className="description">
               <div className='description-block'>
                     <h3 className="description-title">{title}</h3>
                     <p className="description-subtitle">{subtitle}</p>
               </div>
               <div className='description-content' dangerouslySetInnerHTML = {{__html:description}}></div>
               <div className='description-instruction'>
                    <b>Функціональність:</b>
                <ul className='description-instruction-content'>
                    {steps.map(item => {
                        return <li  key ={item} className='description-instruction-content-item'>{item}</li>
                    })}
                </ul>
               </div>
               <div className='PS'>
                    <b>P.S</b> {PS}
               </div>
            </div>
        )
    }
}