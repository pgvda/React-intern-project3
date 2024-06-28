import { AddToDo, ToggleToDo, DeleteToDo } from "../Actions/Types";

const initialState = {
    todos:JSON.parse(localStorage.getItem('todos')) || []
    
};

const todoReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case AddToDo:
            return{
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: action.payload.completed }]
                
            };

        case ToggleToDo:
            return{
                ...state,
                todos:state.todos.map(todo =>
                    todo.id === action.payload.id ? {...todo, completed: !todo.completed} :todo
                )
            };

        case DeleteToDo:
            return{
                ...state,
                todos:state.todos.filter(todo =>todo.id !== action.payload.id)

            };
        default:
            newState = state;
            break
    }
    localStorage.setItem('todos',JSON.stringify(newState.todos));
    return newState;
}

export default todoReducer
