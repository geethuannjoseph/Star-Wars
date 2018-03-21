import React, { PureComponent } from 'react';
import {LoginPage,Home} from '../containers';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import '../app.css';
class App extends PureComponent {
  render() {
    return (
          ((this.props.login.name==undefined)?
          	<div id="App">
          		<div id="login">
          			<LoginPage/>
          		</div>
          	</div>:<div id="App"><Home/></div>)
    );
  }
}

export default App;
