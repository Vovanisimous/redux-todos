import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../store/actions";
import { ITodosState } from "../store/types";
import "../App.scss"

const TodosList = ({
    todos,
    app,
}: {
    app: { show: "all" | "active" | "completed" };
    todos: { todo: string; completed: boolean }[];
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(todos);
        console.log(app);
    }, [todos, app]);

    const onDeleteTodo = (todo: string) => {
        dispatch(deleteTodo(todo));
    };

    const onToggleCompleted = (todo: string) => {
        dispatch(toggleCompleted(todo));
    };

    const list = () => {
        let filteredTodos = [...todos]
        switch (app.show) {
            case "all": {
                filteredTodos = [...todos]
                return filteredTodos;
            }
            case "active": {
                filteredTodos = todos.filter((todo) => !todo.completed)
                return filteredTodos
            }
            case "completed": {
                filteredTodos = todos.filter((todo) => todo.completed)
                return filteredTodos
            }
            default: return filteredTodos
        }
    }

    return (
        <div>
            {list().map((todo: { todo: string; completed: boolean }) => (
                <div key={todo.todo}>
                    <button onClick={() => onToggleCompleted(todo.todo)} className={"complete-button"}>
                        {todo.completed ? "completed" : "uncompleted"}{" "}
                    </button>
                    {todo.todo}
                    <button onClick={() => onDeleteTodo(todo.todo)} className={"delete-button"}>Delete</button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state: ITodosState) => {
    return {
        todos: state.todos.todos,
        app: state.app,
    };
};

export default connect(mapStateToProps, null)(TodosList);
