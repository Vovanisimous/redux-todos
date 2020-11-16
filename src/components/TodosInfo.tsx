import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from "react-redux";

import { ITodosState } from '../store/types';
import {toggleShowState} from "../store/actions";
import "../App.scss"

type Props = ReturnType<typeof mapStateToProps>

const TodosInfo: React.FC<Props> = ({todos}) => {
   const [todosCount, setTodosCount ] = useState(0)
   const dispatch = useDispatch()

   useEffect(() => {
      let counter = 0;

      todos.forEach((todo) => !todo.completed && counter++);

      setTodosCount(counter)
   }, [todos])

   return (
      <div className={"todos-info"}>
         <div>{todosCount} items left</div>
         <div>
            <button onClick={() => dispatch(toggleShowState("all"))}>All</button>
            <button onClick={() => dispatch(toggleShowState("active"))}>Active</button>
            <button onClick={() => dispatch(toggleShowState("completed"))}>Completed</button>
         </div>
      </div>
   );
};

const mapStateToProps = (state: ITodosState) => {
   return {
      todos: state.todos.todos
   }
}

export default connect(mapStateToProps, null)(TodosInfo);