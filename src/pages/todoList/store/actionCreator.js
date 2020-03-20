import { GET_USER_LIST, GET_ALL_USER } from './actionType'
import axios from 'axios'

export const getUserListAction = (userList) => ({
    type: GET_USER_LIST,
    userList
})

export const getAllUserAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:7300/mock/5e74ab0eca458a00267bf30a/tmh/getUserList')
            .then((res) => {
                const userList = res.data.userList
                const action = {
                    type: GET_ALL_USER,
                    userList
                }
                dispatch(action)
            });
    }
}