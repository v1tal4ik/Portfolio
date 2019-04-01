import React from 'react';
import {Link} from 'react-router-dom';
import './util.css'
import './style.css';

export default class Login extends React.Component{

	state={
		errorLogin:''
	}

	handleLogin=(e)=>{
		e.preventDefault();
		this.setState({
			errorLogin:'* Невірний логін або пароль'
		})
	}
    render(){
        return (
            <div className="login">
				<div className="container-login">
					<div className="wrap-login">
					<form className="login-form">
						<span className="login-form-logo">
								<img src='../../img/avatar-01.jpg' alt="avatar" className="login-form-avatar" />
						</span>

						<span className="login-form-title">
							Log in
						</span>

						<div className="wrap-login-input">
							<input className="login-input" type="text" name="username" placeholder="Username" />
							<span className="focus-input" data-placeholder="&#xf207;"></span>
						</div>

						<div className="wrap-login-input">
							<input className="login-input" type="password" name="password" placeholder="Password" />
							<span className="focus-input" data-placeholder="&#xf191;"></span>
						</div>

						<div className="login-form-addition">
							<input className="login-form-checkbox" id="login-remember-me" type="checkbox" name="remember-me" />
							<label className="label-login-form-checkbox" htmlFor="login-remember-me">
								Remember me
							</label>
							<div className="login-forgot">
							<a className="chekbox" href="#">
								Forgot Password?
							</a>
						</div>
						</div>
						<p className='login-form-error'>{this.state.errorLogin}</p>
						<div className="container-login-form-btn">
							<button className="login-form-btn" onClick={this.handleLogin}>
								Login <i className="fal fa-sign-in"></i>
							</button>
						</div>
					</form>
				</div>
				<div className="prev-block">
				<Link to='/'><a className="prev-arrow" href='/'>&shy;<i className="fa fa-arrow-left" aria-hidden="true"></i></a></Link>
				</div>
			</div>
	</div>
        )
    }
}