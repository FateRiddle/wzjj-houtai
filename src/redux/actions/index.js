// import { v4 } from 'uuid'


export const changeTab = (id) => ({
  type: 'CHANGE_TAB',
  id,
})

export const changeVisibility = (id) => ({
  type: 'CHANGE_VISIBILITY',
  id,
})

export const changeOption = (id,option) => ({
  type: 'CHANGE_OPTION',
  id,
  option,
})

export const changePiece = (id) => ({
  type: 'CHANGE_PIECE',
  id,
})
