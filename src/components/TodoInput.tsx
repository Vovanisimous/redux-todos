import { title } from 'process';
import React, {EventHandler, useState} from 'react';
import { useDispatch } from "react-redux";
import { createTodo } from '../store/actions';

const TodoInput = () => {
   const [todoInput, setTodoInput] = useState("")
   const dispatch =  useDispatch()

   const onSubmitForm = (event: any) => {
      event.preventDefault()

      if (!todoInput.trim()) {
         return
      }

      dispatch(createTodo(todoInput))

      setTodoInput("")

   }

    return (
        <div>
            <form onSubmit={onSubmitForm} >
               <input placeholder='What needs to be done?' value={todoInput} onChange={e => setTodoInput(e.target.value)} />
            </form>
        </div>
    );
};

export default TodoInput;