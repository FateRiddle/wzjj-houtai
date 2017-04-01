const completed = (state='all',action) => {
  switch (action.type) {
    case 'CHANGE_COMPLETED_FILTER':
      return action.completed
    default:
      return state
  }
}

export default completed
