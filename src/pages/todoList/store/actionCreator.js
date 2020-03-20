import { GET_USER_LIST } from './actionType'

export const getUserListAction = (userList) => ({
    type: GET_USER_LIST,
    userList
})