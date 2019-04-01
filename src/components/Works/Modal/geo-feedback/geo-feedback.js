import React from 'react';
import './style.css';

export default class GeoFeedback extends React.Component{
    render(){
        return (
            <div className="description">
               <div className='description-block'>
                     <h3 className="description-title">Випускний проект LoftSchool</h3>
                     <p className="description-subtitle">(курс JavaScript)</p>
               </div>
               <div className='description-content'>
                <b>Опис:</b> Це Single Page Application,яке надає змогу залишати коментарі  на карті про ті чи інші місця у яких Ви побували або про які Вам є що сказати. 
                Весь функціонал програми написаний на чистому JS без додаткових бібліотек та фремворків. 
                Підключенна Яндекс карта, тому потрібно включити <span>VPN</span>.
               </div>
               <div className='description-instruction'>
                    <b>Функціональність:</b>
                <ul className='description-instruction-content'>
                    <li className='description-instruction-content-item'>Для того щоб вибрати будь-який обєкт необхідно просто клікнути по ньому.</li>
                    <li className='description-instruction-content-item'>При кліку на обєкт , відкривається вспивающе вікно. В заголовку вінка відображено адрес 
                            вибраного обєкта.</li>
                    <li className='description-instruction-content-item'>Дане вікно дозволяє додати новий відгук про обєкт, який ви обрали. Та переглянути уже існуючі відгуки.</li>
                    <li className='description-instruction-content-item'>Після додавання відгуку буде добавлена мітка на карту.</li>
                    <li className='description-instruction-content-item'>Якщо відгуків декілька вони обєднуються в одну мітку,яка показує к-сть відгуків,які містить в собі.</li>
                    <li className='description-instruction-content-item'>Відгуки обєнуються по одному адресу, а також при віддалені карти.</li>
                    <li className='description-instruction-content-item'>Якщо клікнути на одиночну мітку, то відкриється інформаційне вікно саме цієї мітки .</li>
                    <li className='description-instruction-content-item'>Якщо клікнути на згруповану мітку, то відкриється слайдер з відгуками по цій мітці.</li>
                    <li className='description-instruction-content-item'>У будь-який момент Ви маєте змогу додати новий коментар вже до раніше створеної мітки або ж зробити нову.</li>
                </ul>
               </div>
               <div className='PS'>
                    <b>P.S</b> На жаль  функціональність програми не передбачає збереження даних, тому після закриття всі дані буде втрачено :( 
                    При повторному відкритті карта буде “пуста”.
               </div>
               
            </div>
        )
    }
}