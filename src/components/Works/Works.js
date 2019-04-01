import React from 'react';
import Rodal from 'rodal';
import GeoFeedback from './Modal/geo-feedback';
import './Foxcss/foxhover.css'
import './style.css';


const geoFeedback = {
    title:'Випускний проект LoftSchool',
    subtitle:'(курс JavaScript)',
    description:`Це Single Page Application,яке надає змогу залишати коментарі  на карті про ті чи інші місця у яких Ви побували або про які Вам є що сказати. 
                Весь функціонал програми написаний на чистому JS без додаткових бібліотек та фремворків. 
                Підключенна Яндекс карта, тому потрібно включити <span>VPN</span>`,
    steps:[
        'Для того щоб вибрати будь-який обєкт необхідно просто клікнути по ньому.',
        'При кліку на обєкт , відкривається вспивающе вікно. В заголовку вінка відображено адрес вибраного обєкта.',
        'Дане вікно дозволяє додати новий відгук про обєкт, який ви обрали. Та переглянути уже існуючі відгуки.',
        'Після додавання відгуку буде добавлена мітка на карту.',
        'Якщо відгуків декілька вони обєднуються в одну мітку,яка показує к-сть відгуків,які містить в собі.',
        'Відгуки обєнуються по одному адресу, а також при віддалені карти.',
        'Якщо клікнути на одиночну мітку, то відкриється інформаційне вікно саме цієї мітки .',
        'Якщо клікнути на згруповану мітку, то відкриється слайдер з відгуками по цій мітці.',
        'У будь-який момент Ви маєте змогу додати новий коментар вже до раніше створеної мітки або ж зробити нову.'
        ],
    PS:`На жаль  функціональність програми не передбачає збереження даних, тому після закриття всі дані буде втрачено :( 
                    При повторному відкритті карта буде “пуста”.`
}

export default class Works extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visible:true,
            isOpen:true,
            modal:''
        };
    }

    showMore=e=>{
        this.setState({
             visible:true,
             isOpen:true,
             modal:e.target.title
        })
    }

    closeMore=()=>{
        this.setState({
            visible:false,
            isOpen:false
        });
    }

    render(){
        return (
            <div className="porfolio" id="portfolio">
                <h1 className="works_title">Проекти, за які не соромно</h1>
                <div className="works">
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/geo-feedback.png" alt="Geo-feedback" />
                            <div className="caption">
                                <h4>Geo-feedback</h4>
                                <div className="works-block-btn">
                                    <a className="btn" onClick={this.showMore} title="geo-feedback">More</a>
                                    <a className="btn" href='/geo-feedback/index.html' target="_blank" rel="noopener noreferrer">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/taxi-feedback.png" alt="Loft-taxi" />
                            <div className="caption">
                                <h4>Loft-Taxi</h4>
                                <div className="works-block-btn">
                                    <a className="btn" href="your link" title="View More">More</a>
                                    <a className="btn" href='https://loft-taxi.herokuapp.com' target="_blank" rel="noopener noreferrer">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/crm-feedback.png" alt="Loft-system" />
                            <div className="caption">
                                <h4>Loft-System</h4>
                                <div className="works-block-btn">
                                    <a className="btn" href="your link" title="More">More</a>
                                    <a className="btn" href='https://loftsystems.herokuapp.com' target="_blank" rel="noopener noreferrer">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/arhipov-feedback.png" alt="Imac" />
                            <div className="caption">
                                <h4>Arhipov</h4>
                                <div className="works-block-btn">
                                    <a className="btn" href="your link" title="More">More</a>
                                    <a className="btn" href='https://archipov.herokuapp.com' target="_blank" rel="noopener noreferrer" > Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/friend-feedback.png" alt="Friends-filter" />
                            <div className="caption">
                                <h4>Friend-filter</h4>
                                <div className="works-block-btn">
                                    <a className="btn" href="your link" title="More">More</a>
                                    <a className="btn" href='/friend-filter/index.html' target="_blank">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/beautiful-feedback.png" alt="Your own text" />
                            <div className="caption">
                                <h4>Smitter</h4>
                                <div className="works-block-btn">
                                    <a className="btn" href="your link" title="View More">More</a>
                                    <a className="btn" href='/smitter/index.html' target="_blank" title="View More">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodal visible={this.state.visible} onClose={this.closeMore.bind(this)} animation="zoom" width='response' height='response'>
                    <GeoFeedback 
                         open={this.state.isOpen}
                         onClose={this.closeMore}
                    />
                </Rodal>
            </div>
        )
    }
}