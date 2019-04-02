import React from 'react';
import Rodal from 'rodal';
import Modal from './Modal';
import './Foxcss/foxhover.css'
import './style.css';

const emptyProject = {
    title:'',
    subtitle:'',
    description:``,
    steps:[],
    PS:''
}

const geoFeedback = {
    title:'Випускний проект LoftSchool №1',
    subtitle:'(курс JavaScript)',
    description:`<b>Опис:</b>  Це Single Page Application,яке надає змогу залишати коментарі на карті про ті чи інші місця у яких Ви побували або про які Вам є що 
                сказати. Весь функціонал програми написаний на чистому <span>JS</span> без додаткових бібліотек та фремворків. Підключенна Яндекс карта, тому потрібно включити 
                <span>VPN</span>`,
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

const loftTaxi={
    title:'Випускний проект LoftSchool №2',
    subtitle:'(курс React.JS)',
    description:`<b>Опис:</b> Це Single Page Application,яке надає змогу виконувати замовлення таксі. Цей проект працює з сервісом карт <span>MapBox</span> 
                Також є сервер, який по запиту надає адреси для здійснення замовлення. Програма повністю створенна за допомогою <span>React.JS</span>, 
                і  також використовується для роутингу. Обмін даними з сервером здійснюється через Redux-Saga. 
                Для роботи з даними використовується <span>Redux</span>.`,
    steps:[
        'Необхідно увійти у систему за допомогою лоігна та пароля.(логін:test@test.com  пароль:321)',
        'При невірних даних - авторизація не відбудеться та Ви отримаєте відповідне повідомлення про це.',
        'Для виконання замовлення необхідно вказати особисті дані(необовязково достовірні)',
        'У вікні замовлення Вам буде запропоновано перейти на сторінку платіжних та особистих даних або перейти у вкладку профіль ',
        'Необхідно вірно заповнити усі дані, згідно до валідації.',
        'Якщо дані заповнено та немає ніяких повідомлень Вам потрібно зберегти їх.',
        'Після збереження Ви отримаєте відповідне повідомлення.',
        'Для здійснення замовлення достатньо вибрати адреси відправлення та прибуття.',
        'Після натискання кнопки “виклик таксі” Ваше замовлення буде прийнято та відображено маршрут на карті. '
    ],
    PS:'Програма використовує безкоштовний сайт для хостингу Heroku,тому при першому відкритті можливе невеличке очікування на відкриття. '
}

 const loftSystem = {
    title:'Випускний проект LoftSchool №3',
    subtitle:'(курс Node.JS)',
    description:`Ця програма є аналогом інших різних CRM систем. Основним завданням для виконання проекту було написання <span>Backend</span>, 
                так як Frontend вже був заздалегідь готовий. Сервер реалізовано за допомогою фреймворка <span>Express.JS</span>. 
                Для збереження даних використовується нереляційна база даних <span>MongoDB</span>. Для реалізації чату використовується <span>Socket.io.</span>`,
    steps:[
        'Необхідно увійти у систему за допомогою логіна та пароля або зареєструватися самостійно.',
        'При невірних даних - авторизація не відбудеться та Ви отримаєте відповідне повідомлення про це',
        'У системі реалізовано ролі(адміністратор та користувач).',
        'Користувач може:переглядати список новин,використовувати чат та змінювати особистий пароль або фото.',
        'Щоб увійти в ролі адміністратора використайте логін:admin пароль:admin',
        'Адміністратор може:  створювати, редагувати, видаляти новини та змінювати особисті дані. ',
        'У адміністратора є доступ до налаштувань, де Він може видаляти користувачів, та редагувати їхні права в системі.',
        'Чат реалізовано таким чином, що Ви активні тільки у той момент коли знаходитеся на вкладці чат та можете переписуватися тільки з активними користувачами.',
        'Для перевірки працездатності чату необхідно відкрити систему у ще одній вкладці та здійснити реєстрацію.',
        'Після переходу в “Чат” на обох вкладках та вибравши відповідного користувача, ви зможете здійснювати обмін повідомленнями . '
    ],
    PS:'Програма використовує безкоштовний сайт для хостингу Heroku,тому при першому відкритті можливе невеличке очікування на відкриття. '
 }

 const arhipov = {
    title:'Одне із завдань у LoftSchool',
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
}

const friendFilter = {
    title:'Одне із завдань у LoftSchool',
    subtitle:'(курс JavaScript)',
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
}

const smitter = {
    title:'Верстка сайту з шаблону PSD',
    subtitle:'(самовивчення)',
    description:`Саме цим шаблоном сайту я закріпив своє самостійне вивчення верстки. Сайт повністю адаптивний під PC, Laptop та мобільні девайси.`,
    steps:[' Bootstrap','jQuery',  'LESS' , 'Owl-carousel', 'Slick-slider', 'Awesome-humburger', 'Google Maps'],
    PS:'Це тільки шаблон сайту - тому інтерактивності немає :('
}

export default class Works extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visible:false,
            isOpen:false,
            currentProject:emptyProject
        };
    }

    showMore=e=>{
        if(e.target.title === 'geoFeedback'){
            this.setState({
             visible:true,
             isOpen:true,
             currentProject:geoFeedback
        });
        }
        if(e.target.title === 'loftTaxi'){
            this.setState({
             visible:true,
             isOpen:true,
             currentProject:loftTaxi
        });
        }
        if(e.target.title === 'loftSystem'){
            this.setState({
             visible:true,
             isOpen:true,
             currentProject:loftSystem
        });
        }
        if(e.target.title === 'arhipov'){
            this.setState({
             visible:true,
             isOpen:true,
             currentProject:arhipov
        });
        }
        if(e.target.title === 'friendFilter'){
            this.setState({
             visible:true,
             isOpen:true,
             currentProject:friendFilter
        });
        }
        if(e.target.title === 'smitter'){
            this.setState({
             visible:true,
             isOpen:true,
             currentProject:smitter
        });
        }
    }

    closeMore=()=>{
        this.setState({
            visible:false,
            isOpen:false,
            currentProject:emptyProject
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
                            <img src="../../img/arhipov-feedback.png" alt="Imac" />
                            <div className="caption">
                                <h4>Arhipov</h4>
                                <div className="works-block-btn">
                                    <a className="btn" onClick={this.showMore} title="arhipov">More</a>
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
                                    <a className="btn" onClick={this.showMore} title="friendFilter">More</a>
                                    <a className="btn" href='/friendFilter/index.html' target="_blank">Open</a>
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
                                    <a className="btn" onClick={this.showMore} title="smitter">More</a>
                                    <a className="btn" href='/smitter/index.html' target="_blank" title="View More">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodal visible={this.state.visible} onClose={this.closeMore.bind(this)} animation="zoom" width='response' height='response'>
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