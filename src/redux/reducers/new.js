const user = (state={},action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return {
        id:action.id,
        title:'',
        date:'',
        content:'',
        url:'',
      }
    case 'EDIT_NEWS_TITLE':
      return {
        ...state,
        title: action.title
      }
    case 'EDIT_NEWS_DATE':
      return {
        ...state,
        date: action.date
      }
    case 'EDIT_NEWS_CONTENT':
      return {
        ...state,
        content: action.content
      }
    case 'EDIT_NEWS_URL':
      return {
        ...state,
        url: action.url
      }
    default:
      return state
  }
}

export default user
