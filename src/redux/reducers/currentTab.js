const currentTab = (state = 1, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      if([1,2,3,4,5].indexOf(action.id) > -1){
        return action.id
      } else {
        return state
      }

    default:
      return state
  }
}

export default currentTab
