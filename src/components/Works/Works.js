import React from 'react';
import Rodal from 'rodal';
import Modal from './Modal';
import './Foxcss/foxhover.css'
import './style.css';


const works = {
    emptyProject:{
        title:'',
        subtitle:'',
        description:``,
        steps:[],
        PS:''
    },
    geoFeedback: {
        title:'Graduation project LoftSchool №1',
        subtitle:'(JavaScript course)',
        description:`<b>Опис:</b>  Це Single Page Application,яке надає змогу залишати коментарі на карті про різін місця. 
                    Весь функціонал програми написаний на чистому <span>JS</span> без додаткових бібліотек та фремворків. 
                    Підключенна Яндекс карта, тому потрібно включити <span>VPN</span>`,
        steps:[
            'Для того щоб вибрати будь-який обєкт необхідно просто клікнути по ньому.',
            'При кліку на обєкт , відкривається вспивающе вікно, яке дозволяє додати новий відгук про обєкт та переглянути уже існуючі відгуки.',
            'Після додавання відгуку буде добавлена мітка на карту.',
            'Якщо відгуків декілька вони обєднуються в одну мітку,яка показує к-сть відгуків,які містить в собі.',
            'Відгуки обєнуються по одному адресу, а також при віддалені карти.',
            'Для перегляду відгуків потрібно клікнути на мітку',
            'У будь-який момент Ви маєте змогу додати новий коментар вже до раніше створеної мітки або ж зробити нову.'
            ],
        PS:`Функціональність програми передбачає збереження даних, тому після закриття всі дані буде збережено :)`
    },
    loftTaxi:{
        title:'Graduation project LoftSchool №2',
        subtitle:'(React.JS course)',
        description:`<b>Опис:</b> Це Single Page Application,яке надає змогу виконувати замовлення таксі. Цей проект працює з сервісом карт <span>MapBox</span> 
                    Також є сервер, який по запиту надає адреси для здійснення замовлення. Програма повністю створенна за допомогою <span>React.JS</span>, 
                    і  також використовується для роутингу. Обмін даними з сервером здійснюється через Redux-Saga. 
                    Для роботи з даними використовується <span>Redux</span>.`,
        steps:[
            'Необхідно увійти у систему за допомогою лоігна та пароля.(логін:test@test.com  пароль:321)',
            'Для виконання замовлення необхідно вказати особисті дані(необовязково достовірні)',
            'У вікні замовлення Вам буде запропоновано перейти на сторінку платіжних та особистих даних або перейти у вкладку профіль ',
            'Усі дані потрібно заповнити згідно вимог',
            'Для здійснення замовлення достатньо вибрати адреси відправлення та прибуття.',
            'Після натискання кнопки “виклик таксі” Ваше замовлення буде прийнято та відображено маршрут на карті. '
        ],
        PS:'Програма використовує безкоштовний сайт для хостингу Heroku,тому при першому відкритті можливе невеличке очікування на відкриття. '
    },
    loftSystem: {
        title:'Graduation project LoftSchool №3',
        subtitle:'(Node.JS course)',
        description:`Ця програма є аналогом інших різних CRM систем. Основним завданням для виконання проекту було написання <span>Backend</span>, 
                    так як Frontend вже був заздалегідь готовий. Сервер реалізовано за допомогою фреймворка <span>Express.JS</span>. 
                    Для збереження даних використовується нереляційна база даних <span>MongoDB</span>. Для реалізації чату використовується <span>Socket.io.</span>`,
        steps:[
            'Необхідно увійти у систему за допомогою логіна та пароля або зареєструватися самостійно.',
            'У системі реалізовано ролі(адміністратор та користувач).',
            'Щоб увійти в ролі адміністратора використайте логін:admin пароль:admin',
            'Адміністратор може:  створювати, редагувати, видаляти новини та змінювати особисті дані. ',
            'У адміністратора є доступ до налаштувань, де Він може видаляти користувачів, та редагувати їхні права в системі.',
            'Користувач може:переглядати список новин,використовувати чат та змінювати особистий пароль або фото.',
            'Чат реалізовано таким чином, що Ви активні тільки у той момент коли знаходитеся на вкладці чат та можете переписуватися тільки з активними користувачами.',
            'Для перевірки працездатності чату необхідно відкрити систему у ще одній вкладці та здійснити реєстрацію.',
            'Після переходу в “Чат” на обох вкладках та вибравши відповідного користувача, ви зможете здійснювати обмін повідомленнями . '
        ],
        PS:'Програма використовує безкоштовний сайт для хостингу Heroku,тому при першому відкритті можливе невеличке очікування на відкриття. '
     },
     arhipov: {
        title:'My pet-project',
        subtitle:'(курс Node.JS)',
        description:`<b>Опис:</b>   Це сайт візитка з можливістю редагування та додаяння даних. Основним завданням було написати <span>Backend</span> до вже готового сайту.
                     Для збереження даних в якості навчання використовується LowDB. Сервер реалізово за допомогою фрейморк <span> Express.Js </span>.
                     Також на сайті реалізовані сесії,що дають змогу на деякий час не авторизовуватися повторно.`,
        steps:[
            'Щоб авторизуватися і вносити зміни,потрібно прокрутити вниз та натиснути «Авторизація».',
            'Для успішної авторизації використовуйте логін:test@gmail.com  пароль:123',
            'При введені невірних даних ви отримаєте повідомлення про це.',
            'Тепер Ви маєте змогу редагувати  свої цифрові показники,які будуть відображені на головній сторінці сайту.',
            'Також ви можете додавати товари з описом та картинкою,які теж відображаються на головній сторінці сайту.'
        ],
        PS:'Програма використовує безкоштовний сайт для хостингу Heroku,тому при першому відкритті можливе невеличке очікування на відкриття. '
    },
    friendFilter: {
        title:'One of project in LoftSchool',
        subtitle:'(JavaScript course)',
        description:`<b>Опис:</b>   Це Single Page Application, яке дає змогу фільтрувати список своїх друзів у соц.мережі <span>VK</span>. 
                     Реалізовано все за допомогою нативного <span>JS</span>.Також реалізована функція переміщення <span>Drag’n’Drop</span>. 
                     Програма працює з VK API тому необхідно включити <span>VPN</span>. `,
        steps:[
            'Щоб список друзів було загружено на сайт потрібно пройти аутенфікацію у соц.мережі VK.',
            'Після успішної аутенфікації список Ваших друзів буде загружено у список зліва.',
            'Переміщати друзів у списках можна за допомогою кнопок або ж просто перетягнувши з одного списку до іншого.',
            'Для пошуку певного друга можете використовувати пошукову строку.',
            'Після натискання кнопки «Зберегти», списки буде збережено.',
            'При повторному відкриті дані залишаться згідно до останніх маніпуляцій.'
        ],
        PS:'Програма жодним чином не впливає на дані в соц.мережі VK, а лише використовує їх в якості інформації.'
    },
    smitter: {
        title:'Верстка сайту з шаблону PSD',
        subtitle:'(самовивчення)',
        description:`Саме цим шаблоном сайту я закріпив своє самостійне вивчення верстки. Сайт повністю адаптивний під PC, Laptop та мобільні девайси.`,
        steps:[' Bootstrap','jQuery',  'LESS' , 'Owl-carousel', 'Slick-slider', 'Awesome-humburger', 'Google Maps'],
        PS:'Це тільки шаблон сайту - тому інтерактивності немає :('
    }

}


export default class Works extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            isOpen:false,
            currentProject:works['emptyProject']
        };
    }

    showMore = ({ target:{ title }}) => {
        this.setState({
            visible: true,
            isOpen:true,
            currentProject:works[title]
        })
    }


    closeMore = () => {
        this.setState({
            visible:false,
            isOpen:false,
            currentProject:works['emptyProject']
        });
    }

    render(){
        const w = window.innerWidth / 1.5;
        const h = window.innerHeight / 1.5; // width and height for modal window
        return (
            <div className="works" id="works">
                <h1 className="works_title">Проекти, за які не соромно</h1>
                <div className="works-wrapper">
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/geo-feedback.png" alt="Geo-feedback" />
                            <div className="caption">
                                <h4>Geo-feedback</h4>
                                <div className="works-block-btn">
                                    <a className="btn" onClick={this.showMore} title="geoFeedback">More</a>
                                    <a className="btn" href='/geoFeedback/index.html' target="_blank" rel="noopener noreferrer">Open</a>
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
                                    <a className="btn" onClick={this.showMore} title="loftTaxi">More</a>
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
                                    <a className="btn" onClick={this.showMore} title="loftSystem">More</a>
                                    <a className="btn" href='https://loftsystems.herokuapp.com' target="_blank" rel="noopener noreferrer">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/hot-dog-feedback.jpg" alt="Imac" />
                            <div className="caption">
                                <h4>Hot Dog service</h4>
                                <div className="works-block-btn">
                                    <a className="btn" onClick={this.showMore} title="hot-dog service">More</a>
                                    <a className="btn" href='https://hot-dog-service.herokuapp.com' target="_blank" rel="noopener noreferrer" > Open</a>
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
                                    <a className="btn" onClick={this.showMore} title="friendFilter">More</a>
                                    <a className="btn" href='/friendFilter/index.html' target="_blank">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-item">
                        <div className="effect eff-5">
                            <img src="../../img/beautiful-feedback.png" alt="Smitter" />
                            <div className="caption">
                                <h4>Smitter</h4>
                                <div className="works-block-btn">
                                    <a className="btn" onClick={this.showMore} title="smitter">More</a>
                                    <a className="btn" href='/smitter/index.html' target="_blank">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodal visible={this.state.visible} onClose={this.closeMore.bind(this)} animation="zoom" width={ w } height={ h }>
                    <Modal 
                         open={this.state.isOpen}
                         onClose={this.closeMore}
                         obj = {this.state.currentProject}
                    />
                </Rodal>
            </div>
        )
    }
}
