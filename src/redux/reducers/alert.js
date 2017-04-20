const alert = (state={hidden:true,msg:'',currentId:''},action) => {
  switch (action.type) {
    case 'CLOSE_ALERT':
      return {
        hidden:true,
        msg:'',
        currentId:''
      }
    case 'OPEN_ALERT':
      return {
        hidden:false,
        msg:action.msg,
        currentId:action.id
      }
    default:
      return state
  }
}

export default alert
