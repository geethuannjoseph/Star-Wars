import React, {PureComponent} from 'react';
import axios from 'axios';
import {Form,FormGroup,Input} from 'reactstrap';
import Planet from './Planet';
export default class extends PureComponent{
	constructor(props){
		super(props);
		this.state={
			planets:props.planets.details
		}
		this.searchPlanets=this.searchPlanets.bind(this);
	}
	searchPlanets(e){
		e.preventDefault();
		let planets=this.props.planets.details;
		planets=planets.filter((item)=>{
			if(item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1)
				return item;
			});
			this.setState({planets:planets});
	}
	render(){
		return(
				<div id="home">
					<div className="header">
						<h4 id="welcome">Welcome back,{this.props.user.name}</h4>
					</div>
					<Form>
				        <FormGroup>
				          <Input type="text" name="search" id="searchPlanets" placeholder="Search for planets" onChange={this.searchPlanets}/>
				        </FormGroup>
				    </Form>
				    <div id="planetDetails">
				    	{this.state.planets.map((planet,i)=>
				    		<Planet name={planet.name} key={i}/>
				    	)}
				    </div>
				</div>
			)
	}
}