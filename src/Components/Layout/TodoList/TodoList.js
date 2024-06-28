import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToggleToDo, DeleteToDo } from "../../../Store/Actions/Types";
import { deleteToDo, toggleToDo } from "../../../Store/Actions/Index";

import './TodoListStyle.scss';
const TodoList = () => {

    const [isComplete, setIsComplete] = useState("");
    const todos = useSelector(state => state.todo.todos );
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleToDo(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteToDo(id))
    }

    console.log(todos);

   

    return (
        <ul>
            <div className="btn_section">
                <button>completed</button>
                <button>active</button>

            </div>
            {todos.map(todo => (
                <li key={todo.id}>
                    <div className="todo_list">

                        <div>
                            <span onClick={() => handleToggle(todo.id)} style={{textDecoration:todo.completed ? 'line-through' : 'none' , cursor :'pointer'}}>{todo.text}</span>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default TodoList;