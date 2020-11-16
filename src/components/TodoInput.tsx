import React, { useState} from 'react';
import { useDispatch } from "react-redux";
import "../App.scss"
import { createTodo } from '../store/actions';

const TodoInput = () => {
   const [todoInput, setTodoInput] = useState("")
   const dispatch =  useDispatch()

   const onSubmitForm: React.ReactEventHandler = (event) => {
      event.preventDefault()

      if (!todoInput.trim()) {
         return
      }

      dispatch(createTodo(todoInput))

      setTodoInput("")

   }

    return (
        <div className={"todos-input"}>
            <form onSubmit={onSubmitForm} className={"todos-form"}>
               <input placeholder='What needs to be done?' value={todoInput} onChange={e => setTodoInput(e.target.value)} />
            </form>
        </div>
    );
};

export default TodoInput;