import { helpers } from "handlebars";

const initState = {
    todos: [],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';

const TODO_ADD = 'TODO_ADD';

export const updateCurrent = (value) => ({
    type: CURRENT_UPDATE,
    payload: value
})


export default(state=initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, todos: [...state.todos, action.payload]}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        default:
            return state;
    }
}
 
