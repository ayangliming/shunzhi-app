
let defaultAccountState ={
  isAuthenticated:false,
  currentUser:"默认"
}

export default function accountReducer(state=defaultAccountState,action){
  switch (action.type) {
    case "SIGN_IN":
      return {...state,isAuthenticated:true,currentUser:action.username}
    case 'LOG_OUT':
    return  {...state,isAuthenticated:false,currentUser:""}
    default:
      return state
  }
}
