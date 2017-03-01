const piece = (state, action) => {
  switch (action.type) {
    case "CHANGE_VISIBILITY":
      return {
        ...state,
        show: !state.show,
      }
    case "CHANGE_OPTION":
      return {
        ...state,
        currentOption: action.option,
      }

    default:
      return state
  }
}

export default piece
