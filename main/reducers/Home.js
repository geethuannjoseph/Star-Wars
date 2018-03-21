const user =(state={},action)=>{
	switch(action.type){
		case 'SET_USER':return {...state,name:action.data,searches:0};
		default:return state;
	}
}
export default user;