import moment from 'moment'

const users = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        {
          name:action.name,
          phone:action.phone,
          address:action.address,
          createdAt:moment(),
        },
        ...state
      ]
    case "UPDATE_USER":
      const nextState = [...state]
      action.users.forEach((user,index) => {
        nextState[index] = user
      })
      return nextState
    default:
      return state
  }
}

export default users

export const getFilteredUsers = (users,filter) => {
  const filteredUsers = users.filter(user => {
    return user.name.includes(filter) ||
      user.phone.includes(filter) ||
      user.address.includes(filter) ||
      user.huodong.includes(filter)
  })
  return filteredUsers
}
