const planets=(state={},action)=>{
	switch(action.type){
		case 'SET_PLANETS': return {...state,details:action.data}
		default:return state;
	}
	return state;
}
export default planets;