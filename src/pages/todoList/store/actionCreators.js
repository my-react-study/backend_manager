import { GET_USER_LIST } from './actionTypes'

export const getUserListAction = (userList) => ({
    type: GET_USER_LIST,
    userList
})