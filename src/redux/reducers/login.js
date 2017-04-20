const login = (state = true, action) => {
  if(action.type === 'TOGGLE_LOGIN'){
    return !state
  }
  return state
}

export default login
