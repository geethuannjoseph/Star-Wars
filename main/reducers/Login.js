let newState={
		showLoggingIn:false,
		showLoginError:false
	}
const login =(state=newState,action)=>{
	switch(action.type){
		case 'LOGIN':return {...state,name:action.data};
		case 'LOGGING_IN':return {...state,showLoggingIn:action.data}
		case 'LOGIN_ERROR':return {...state,showLoginError:action.data}
		default:return state;
	}
}
export default login;