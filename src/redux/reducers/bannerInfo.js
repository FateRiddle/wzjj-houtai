const bannerInfo = (state='',action) => {
  switch (action.type) {
    case 'SAVE_NEWS_REQUEST':
    case 'DELETE_NEWS_REQUEST':
      return '处理中...'
    case 'SAVE_NEWS':
      return '保存成功'
    case 'DELETE_NEWS':
      return '删除成功'
    case 'SAVE_NEWS_FAILURE':
      return action.msg
    case 'DELETE_NEWS_FAILURE':
      return action.msg
    default:
      return state
  }
}

export default bannerInfo


// case 'DELETE_NEWS_REQUEST':
//   return {msg:'处理中...',color:'green'}
// case 'SAVE_NEWS':
//   return {msg:'保存成功',color:'green'}
// case 'DELETE_NEWS':
//   return {msg:'删除成功',color:'green'}
// case 'SAVE_NEWS_FAILURE':
//   return {msg:action.msg,color:'red'}
// case 'DELETE_NEWS_FAILURE':
//   return {msg:action.msg,color:'red'}
