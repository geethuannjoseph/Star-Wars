import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginPage} from '../components';
import {loginAction,loggingIn,loginError,setUser,setPlanets} from '../actions';

const mapStateToProps=(state)=>{
	return { login:state.login }
}
const mapDispatchToProps=(dispatch)=>{
	return bindActionCreators({loginAction:loginAction,loggingIn:loggingIn,loginError:loginError,setUser:setUser,setPlanets:setPlanets},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);