import { CREATE_TODO, DELETE_TODO, ITodos, TodosActionTypes, TOGGLE_COMPLETED } from "../types";

const initialState = {
    todos: [],
};

export const todosReducer = (state: ITodos = initialState, action: TodosActionTypes) => {
    switch (action.type) {
        case CREATE_TODO: {
            return {
                ...state,
                todos: state.todos.concat([action.payload]),
            };
        }
        case DELETE_TODO: {
            const a = { ...state };
            const b = a.todos.filter((todo) => todo.todo !== action.payload);
            return {
                ...state,
                todos: b,
            };
        }
        case TOGGLE_COMPLETED: {
            const a = { ...state };
            const b = a.todos.map((todo) =>
                todo.todo === action.payload
                    ? { todo: todo.todo, completed: todo.completed ? false : true }
                    : { todo: todo.todo, completed: todo.completed },
            );
            return {
                ...state,
                todos: b,
            };
        }
        default:
            return state;
    }
};
