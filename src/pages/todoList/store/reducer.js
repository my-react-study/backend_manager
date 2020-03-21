import { GET_USER_LIST, GET_ALL_USER, GET_USERS_BY_USERNAME, ADD_USER, DELETE_USER_BY_ID } from './actionType'

const defaultState = {
    userList: [
        {
            username: "刘三",
            age: "20",
            address: "上海",
        },
        {
            username: "李四",
            age: "20",
            address: "上海",
        },
        {
            username: "王五",
            age: "20",
            address: "上海",
        },
        {
            username: "刘三san",
            age: "20",
            address: "成都"
        }
    ]
}  //默认数据
export default (state = defaultState, action) => {//就是一个方法函数
    //Reducer里只能接受state，不能传递state
    if (action.type === GET_USER_LIST) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.userList = action.userList
        return newState
    }
    if (action.type === GET_ALL_USER) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.userList = action.userList
        return newState
    }
    if (action.type === GET_USERS_BY_USERNAME) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.userList = action.userList
        return newState
    }
    if (action.type === ADD_USER) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.userList = action.userList
        return newState
    }
    if (action.type === DELETE_USER_BY_ID) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.userList = newState.userList.filter(user => user.id !== action.id)
        return newState
    }
    return state
}