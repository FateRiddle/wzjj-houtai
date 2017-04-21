const member = (state={},action) => {
  switch (action.type) {
    case 'TOGGLE_MEMBER_COMPLETE':
      return {
        ...state,
        completed:!state.completed
      }
    case 'EDIT_MEMBER_MEMO':
      return {
        ...state,
        memo: action.memo
      }
    default:
      return state
  }
}

export default member
