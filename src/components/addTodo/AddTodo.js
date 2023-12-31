import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodos} from "../../store/todoSlice";
import {nanoid} from "@reduxjs/toolkit"

const AddTodo = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const submit = () => {
        if (text.trim().length > 0){
            const items = text.trim().split(',');
            dispatch(
                addTodos(
                    items.map(item => ({id: nanoid(), todo: item, completed: false}))
                )
            )
        }
    }

    return (
        <div className="add-todo">
            <p>Добавить дело</p>
            <input
                type="text"
                value={text}
                onChange={e=> setText(e.target.value)}
            />
            <button onClick={submit}>Добавить</button>
        </div>
    );
};

export default AddTodo;