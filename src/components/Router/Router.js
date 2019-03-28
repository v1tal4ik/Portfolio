import React ,{ Component }from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Login from '../Login';
import App from '../App';

//це роутер, який перенаправляє по компонентах
//компоненти Login і App


class Router extends Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/' component={App}  exact/>
                <Route path='/login' component={Login}  exact/>
                <Redirect to='/' />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;