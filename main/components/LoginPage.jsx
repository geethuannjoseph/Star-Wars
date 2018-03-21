import React, {PureComponent} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Alert } from 'reactstrap';
import {loginAction,loginError} from '../actions';
import {isEqual} from 'lodash';
import axios from 'axios';
export default class LoginPage extends PureComponent{
	shouldComponentUpdate(nextProps){
		return !isEqual(this.props,nextProps);
	}
	constructor(props){
		super(props)
		this.state={
			validCredentials:false
		}
		this.loginAction=this.loginAction.bind(this);
		this.nameChange=this.nameChange.bind(this);
		this.setPassword=this.setPassword.bind(this);
	}
	nameChange(e){
		this.setState({name:e.target.value})
	}
	setPassword(e){
		this.setState({password:e.target.value})
	}
	loginAction(){
		this.props.loginError(false);
		this.props.loggingIn(true);
		axios.get("https://swapi.co/api/people")
			.then((response)=>{
				response.data.results.map((user,i)=>{
					if(user.name==this.state.name && user.birth_year==this.state.password){
						this.setState({validCredentials:true})
						axios.get("https://swapi.co/api/planets")
							.then((response)=>{
								let planets=response.data.results;
								this.props.setPlanets(planets);
						})
						.then((response)=>{
							this.props.loginAction(this.state.name);
							this.props.setUser(this.state.name);
							this.props.loginError(false);
							this.props.loggingIn(false);
						})
						.catch((err)=>{
							console.log(err);
						})
					}
				})
				if(!this.state.validCredentials){
						this.props.loginError(true);
						this.props.loggingIn(false);
				}
			})
			.catch((err)=>{
			})
	}
	render(){
		return(
				<div className="row">
					<div id="loginContainer">
					<h4>Login to your account</h4>
				          	<Form>
				          		<FormGroup>
          							<Input type="text" name="username" id="username" placeholder="username" onBlur={this.nameChange}/>
				          		</FormGroup>
				          		<FormGroup>
          							<Input type="password" name="password" id="password" placeholder="password" onBlur={this.setPassword} />
				          		</FormGroup>
				          		<Button color="primary" id="loginButton" className={this.props.login.showLoggingIn?"hideBlock":"showBlock"} onClick={()=>this.loginAction()}>Login</Button>{' '}
				          		<Button color="primary" id="wait" className={this.props.login.showLoggingIn?"showBlock":"hideBlock"} onClick={(e)=>e.preventDefault}>Logging in...</Button>{' '}
				          		<p className={(this.props.login.showLoginError?"showBlock":"hideBlock") + " text-danger"}>
						        	Invalid credentials!
						      	</p>
				          	</Form>
				    </div>
				</div>
			);
	}
}