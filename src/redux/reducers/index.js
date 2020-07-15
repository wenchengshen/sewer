

import { combineReducers } from 'redux';
const defaultState=[
    {
        id:0,
        text:"test",
        completed:true
    }
]

const todos = (state=defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}


const loginConf=(state={sid:null,id:null,userName:"test"},action)=>{
    switch (action.type) {
        case "ADD":
            //必须是纯函数不可以对state做修改
            // return Object.assign(state,{id:action.data.id,userName:action.data.userName})
            return Object.assign({},state,{id:action.data.id,userName:action.data.userName})
        default:
            return state
    }
}


export default combineReducers({
    todos,
    loginConf
})



