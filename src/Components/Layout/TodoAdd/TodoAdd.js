import { React, useState } from "react";
import {useDispatch} from "react-redux";
import { addToDo } from "../../../Store/Actions/Index";

import './TodoAddStyle.scss';

const TodoAdd = ()=>{
    const [words, setWords] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        if(words.trim()){
            dispatch(addToDo(words));
            setWords('');
        }


    }
    
    return(
       <form onSubmit={handleSubmit}>
        <input type="text" value={words} onChange={(e) => setWords(e.target.value)} className="input_field"></input>
        <button type="submit" className="sbmit_btn">Add</button>
       </form>
    )
}

export default TodoAdd;