import { AddToDo, ToggleToDo, DeleteToDo, SET_VISIBILITY_FILTER, CLEAR_VISIBILITY_FILTER } from "./Types";

export const addToDo = (text) =>({
    type:AddToDo,
    payload: {
        text,
        completed: false
    }
});

export const toggleToDo = (id) => ({
    type: ToggleToDo,
    payload: {
        id,
        
    }
})

export const deleteToDo = (id) => ({
    type: DeleteToDo,
    payload: {
        id,
        
    }
})

