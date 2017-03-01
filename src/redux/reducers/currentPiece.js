const currentPiece = (state = ['11','21','31','41','51'], action) => {
  switch (action.type) {
    case "CHANGE_PIECE":
      const [ tabId, _ ] = Array.from(action.id)
      if (['1','2','3','4','5'].indexOf(tabId) > -1) {
        return [
          ...state.slice(0, tabId-1),
          action.id,
          ...state.slice(tabId),
        ]
      } else {
        return state
      }

    default:
      return state
  }
}

export default currentPiece
