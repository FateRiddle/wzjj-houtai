const login = (state = false, action) => {
  if(action.type === 'TOGGLE_LOGIN'){
    return !state
  }
  return state
}

export default login
