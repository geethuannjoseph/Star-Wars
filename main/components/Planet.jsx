import React,{PureComponent} from 'react';

export default class Planet extends PureComponent{
	render(){
		return(
				<div class="planet">
					<p>{this.props.name}</p>
				</div>
			)
	}
}