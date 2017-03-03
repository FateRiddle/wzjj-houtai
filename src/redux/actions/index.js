// import { v4 } from 'uuid'


export const addUser = (name,phone,address) => ({
  type: 'ADD_USER',
  name,
  phone,
  address,
})

export const updateUser = (users) => ({
  type: 'UPDATE_USER',
  users,
})

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
})

export const toggleLogin = () => ({
  type: 'TOGGLE_LOGIN',
})
