import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../store/actions";
import { ITodosState } from "../store/types";
import "../App.scss";

type Props = ReturnType<typeof mapStateToProps>;

const TodosList: React.FC<Props> = ({ todos, app }) => {
    const dispatch = useDispatch();

    const onDeleteTodo = (todo: string) => {
        dispatch(deleteTodo(todo));
    };

    const onToggleCompleted = (todo: string) => {
        dispatch(toggleCompleted(todo));
    };

    const list = () => {
        let filteredTodos = [...todos];
        switch (app.show) {
            case "all": {
                filteredTodos = [...todos];
                return filteredTodos;
            }
            case "active": {
                filteredTodos = todos.filter((todo) => !todo.completed);
                return filteredTodos;
            }
            case "completed": {
                filteredTodos = todos.filter((todo) => todo.completed);
                return filteredTodos;
            }
            default:
                return filteredTodos;
        }
    };

    return (
        <div className={"todos-list"}>
            {list().map(
                (todo: { todo: string; completed: boolean; creationDate: string }, index) => (
                    <div key={index}>
                        <button
                            onClick={() => onToggleCompleted(todo.todo)}
                            className={"complete-button"}
                        >
                            {todo.completed ? "completed" : "uncompleted"}{" "}
                        </button>
                        {todo.todo}
                        <span>{todo.creationDate}</span>
                        <button onClick={() => onDeleteTodo(todo.todo)} className={"delete-button"}>
                            Delete
                        </button>
                    </div>
                ),
            )}
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
