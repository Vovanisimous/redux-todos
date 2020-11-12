import React from "react"
import TodoInput from "./TodoInput"
import TodosInfo from "./TodosInfo"
import TodosList from "./TodosList"

const TodosContainer = () => {
    return (
        <div>
            <TodoInput/>
            <TodosList app={{show: "all"}} todos={[]} />
            <TodosInfo todos={[]}/>
        </div>
    )
}

export default TodosContainer