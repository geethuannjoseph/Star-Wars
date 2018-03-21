import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {App} from '../components';

const mapStateToProps=(state)=>{
	return { login:state.login }
}

export default connect(mapStateToProps,null)(App);