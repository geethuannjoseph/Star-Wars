export const loginAction=(val)=>{
	return {
		type:'LOGIN',
		data:val
	}
}
export const loggingIn=(val)=>{
	return {
		type:'LOGGING_IN',
		data:val
	}
}
export const loginError=(val)=>{
	return {
		type:'LOGIN_ERROR',
		data:val
	}
}