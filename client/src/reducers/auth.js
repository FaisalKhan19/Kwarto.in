// Create user reducer function
// {type: 'LOGGED_IN_USER', payload: {name:'Ryan'}, role:'seller'}
export const authReducer = (state = {name:'Ryan', role:'seller'}, action) => {
    switch(action.type) {
      case "LOGGED_IN_USER":
        return{...state, ...action.payload};
      case "LOGOUT":
        return action.payload;
      default:
        return state;
    }
  }