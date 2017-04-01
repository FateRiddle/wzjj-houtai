const user = (state={},action) => {
  switch (action.type) {
    case 'TOGGLE_USER_COMPLETE':
      return {
        ...state,
        completed:!state.completed
      }
    case 'EDIT_USER_MEMO':
      return {
        ...state,
        memo: action.memo
      }
    default:
      return state
  }
}

export default user
