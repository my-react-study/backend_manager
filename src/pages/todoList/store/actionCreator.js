import { GET_USER_LIST, GET_ALL_USER, GET_USERS_BY_USERNAME } from './actionType'
import axios from 'axios'
import servicePath from '../../../config/ApiUrl'

export const getUserListAction = (userList) => ({
    type: GET_USER_LIST,
    userList
})

export const getAllUserAction = () => {
    return (dispatch) => {
        axios.get(servicePath.getAllUser)
            .then((res) => {
                console.log(res)
                const userList = res.data.data.userList
                const action = {
                    type: GET_ALL_USER,
                    userList
                }
                dispatch(action)
            });
    }
}

export const getUsersByUsername = (username) => {
    return (dispatch) => {
        if (username === null || username === "") {
            axios.get(servicePath.getAllUser)
                .then((res) => {
                    const userList = res.data.data.userList
                    const action = {
                        type: GET_ALL_USER,
                        userList
                    }
                    dispatch(action)
                });
        }
        else {
            axios.get(servicePath.getUsersByUsername + username)
                .then((res) => {
                    const userList = res.data.data.userList
                    const action = {
                        type: GET_USERS_BY_USERNAME,
                        userList
                    }
                    dispatch(action)
                });
        }
    }
}