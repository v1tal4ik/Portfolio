import React from 'react';
import axios from 'axios';
import './style.css';

export default class Works extends React.Component{


    openProjects=(e)=>{
        e.preventDefault();
        axios.get(`/${e.target.alt}`)
        .then((response)=>{
            console.log(response);
          })
          .catch((error)=>{
            console.log(error);
          });
    }
    render(){
        return (
            <div className="porfolio" id="portfolio">
            <h1 className="works_title">My works</h1>
            <div className="works">
                <div className="works-item">
                     <a href='/geo-feedback/index.html' target="_blank" name='geo-feedback.com' ><img src="../../img/geo-feedback.png" alt="Geo-feedback"/></a>
                </div>
                <div className="works-item">
                     <a href='/projects/Loft-taxi/index.html' target="_blank"><img src="../../img/taxi-feedback.png" alt="Loft-taxi"/></a>
                </div>
                <div className="works-item">
                     <a href='https://loftsystems.herokuapp.com' target="_blank"><img src="../../img/crm-feedback.png" alt="Loft-system"/></a>
                </div>
                <div className="works-item">
                    <a href='/arhipov.com' target="_blank" ><img src="../../img/IMac_vector.png" alt="Imac"/></a>
                </div>
                <div className="works-item">
                     <a href='/friend-filter/index.html' target="_blank"><img src="../../img/friend-feedback.png" alt="Friends-filter"/></a>
                </div>
                <div className="works-item">
                     <a href='/smitter/index.html' target="_blank"><img src="../../img/beautiful-feedback.png" alt="Smitter"/></a>
                </div>
            </div>
        </div>
        )
    }
}