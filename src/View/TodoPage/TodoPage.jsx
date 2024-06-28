import TodoAdd from '../../Components/Layout/TodoAdd/TodoAdd';
import TodoList from '../../Components/Layout/TodoList/TodoList';
import './TodoPageStyle.scss';

const TodoPage = ()=>{
    return(
        <div className='main_todo_div'>
            <div className='todo_add_div'>
                <TodoAdd/>
            </div>
            <TodoList/>
        </div>
    )
}

export default TodoPage;