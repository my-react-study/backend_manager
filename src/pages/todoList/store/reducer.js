import { GET_USER_LIST, GET_ALL_USER } from './actionType'

const defaultState = {
    userList: [
        {
            username: "刘三",
            age: "20",
            address: "上海",
        },
        {
            username: "刘三",
            age: "20",
            address: "上海",
        },
        {
            username: "刘三",
            age: "20",
            address: "上海",
        },
        {
            username: "刘三",
            age: "20",
            address: "上海",
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
    return state
}