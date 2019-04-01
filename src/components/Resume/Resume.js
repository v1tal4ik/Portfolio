import React, {Fragment} from 'react';
import avatar from '../../img/avatar-2.jpg';
import './style.css';

export default class Resume extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="resume" id="resume">
            <div className="wrapper-info">
                <div className="info-block">
                   <img src={avatar} alt='avatar'/>
                    <p className="name">Vitalii Sukhodolskyi</p>
                    <p className="job">JavaScript-розробник</p>
                    <p className="sallary">Бажанна зарптала: <span className="money">від 500$</span></p>
                </div>
                <div className="skills-block">
                    <span className="experiense-title">Досвід</span>
                    <ul className="experiense">
                        <li className="experiense-item">меньше 1 року</li>
                        <li className="experiense-item">Реалізованих три випускних проекта у LoftSchool</li>
                        <li className="experiense-item"> Досвід роботи в команді</li>
                    </ul>

                    <span className="experiense-title">Ключові навики</span>
                    <ul className="hard-skill">
                        <li className="hard-skills">Знання HTML5, CSS3, Bootsrap, jQuery</li>
                        <li className="hard-skills">Нативний JavaScript</li>
                        <li className="hard-skills">EcmaScript 6, AJAX, ООП</li>
                        <li className="hard-skills">Досвід роботи з Framework React + Redux, Redux-Saga</li>
                        <li className="hard-skills">Впевнені знання Node.JS та розробки REST API</li>
                        <li className="hard-skills">Досвід роботи з Framework Express.js , Koa.js</li>
                        <li className="hard-skills">Досвід роботи з Mongo DB та PostgresSQL</li>
                        <li className="hard-skills">Впевнене володіння Git,Gulp,Webpack,Photoshop, VS Code</li>
                        <li className="hard-skills">Ріень англійської: Intermediate</li>
                    </ul>
                </div>
            </div>
        </div>
            </Fragment>
        )
    }
}