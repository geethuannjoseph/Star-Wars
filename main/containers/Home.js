import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Home} from '../components';
const mapStateToProps=(state)=>{
	return { user:state.user,planets:state.planets}
}
export default connect(mapStateToProps,null)(Home);