import { GET_USER_LIST, GET_ALL_USER, GET_USERS_BY_USERNAME, ADD_USER, DELETE_USER_BY_ID } from './actionType'
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
            dispatch(getAllUserAction())
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

export const addUserAction = (user) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: servicePath.addUser,
            data: user
        }).then(
            res => {
                if (res.data.isSuccess) {
                    dispatch(getAllUserAction())
                }
            }
        )
    }
}

export const editUserAction = (user) => {
    return (dispatch) => {
        console.log(user)
        axios({
            method: 'put',
            url: servicePath.editUser,
            data: user
        }).then(
            res => {
                if (res.data.isSuccess) {
                    dispatch(getAllUserAction())
                }
            }
        )
    }
}

export const deleteUserAction = (id) => {
    return (dispatch) => {
        axios({
            method: 'delete',
            url: servicePath.deleteUser + id,
        }).then(
            res => {
                console.log(res)
                if (res.data.isSuccess) {
                    const action = {
                        type: DELETE_USER_BY_ID,
                        id
                    }
                    dispatch(action)
                }
            }
        )
    }
}