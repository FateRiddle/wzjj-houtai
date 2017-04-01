const appointment = (state={},action) => {
  switch (action.type) {
    case 'TOGGLE_APP_COMPLETE':
      return {
        ...state,
        completed:!state.completed
      }
    case 'EDIT_APP_MEMO':
      return {
        ...state,
        memo: action.memo
      }
    default:
      return state
  }
}

export default appointment
