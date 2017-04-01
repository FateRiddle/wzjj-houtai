//initial state:
const preloadState = {
  users: {
    allIds:[4,5],
    byId:{
      4:{"id":4,"name":"的萨芬","phone":"15205819127","address":"123","huodong":"ej家","createdAt":"2017-02-28T23:16:57.333Z",completed:false, memo:'asdfkaddsdfsdfsdfsdfsdfjsfklajsdflkjasdklfjldsjfa'},
      5:{"id":5,"name":"芬bid","phone":"15205819127","address":"123","huodong":"量房","createdAt":"2017-02-28T23:16:57.333Z",completed:false, memo:'asdfkaddsdfsdfsdfsdfsdfjsfklajsdflkjasdklfjldsjfa'},
    }
  },
  appointments: {
    allIds:['1','2'],
    byId:{
      '1':{"id":'1',"name":"的萨芬","phone":"15205819127","bao":"肉包","kuan":"ej款","createdAt":"2017-02-28T23:16:57.333Z",completed:false, memo:''},
      '2':{"id":'2',"name":"a萨芬","phone":"15205349127","bao":"long包","kuan":"sd款","createdAt":"2017-02-28T23:16:57.333Z",completed:true, memo:null},
    }
  },
}

export default preloadState
