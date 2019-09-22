import React, {Fragment} from 'react';
import avatar from '../../img/avatar-2.jpg';
import './style.css';

const Resume = () => (
    <Fragment>
        <div className="resume" id="resume">
            <div className="wrapper-info">
                <div className="info-block">
                    <img src={avatar} alt='avatar'/>
                    <p className="name">Vitalii Suhodolskiy</p>
                    <p className="job">JavaScript-developer</p>
                    <p className="sallary">Desirable salary: <span className="money">400$</span></p>
                </div>
                <div className="skills-block">
                    <span className="experiense-title">Experiense</span>
                    <ul className="experiense">
                        <li className="experiense-item">up to 1 year</li>
                        <li className="experiense-item">Completed 3 graduation projects at LoftSchool</li>
                        <li className="experiense-item">Work experience in team</li>
                    </ul>
                    <span className="experiense-title">Hard skills</span>
                    <ul className="hard-skill">
                        <li className="hard-skills">Knowledge HTML5, CSS3, Bootsrap, jQuery</li>
                        <li className="hard-skills">Native JavaScript</li>
                        <li className="hard-skills">EcmaScript 6, AJAX, OOP</li>
                        <li className="hard-skills">Work experience with Framework React + Redux, Redux-Saga</li>
                        <li className="hard-skills">Good knowledge Node.JS and REST API</li>
                        <li className="hard-skills">Work experience with з Framework Express.js , Koa.js</li>
                        <li className="hard-skills">Work experience with з Mongo DB та PostgresSQL</li>
                        <li className="hard-skills">Experience use Git,Gulp,Webpack,Photoshop, VS Code</li>
                        <li className="hard-skills">English level: Intermediate</li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
)


export default Resume;