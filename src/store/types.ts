export const CREATE_TODO = "TODOS/CREATE_TODO"
export const DELETE_TODO = "TODOS/DELETE_TODO"
export const TOGGLE_COMPLETED = "TODOS/TOGGLE_COMPLETED"
export const TOGGLE_SHOW_STATE = "APP/TOGGLE_SHOW_STATE"


export interface ITodosState {
   todos: ITodos,
   app: {
      show: "all" | "active" | "completed"
   }
}

export interface ITodos {
   todos: {
      todo: string,
      completed: boolean,
      creationDate: string
   }[]
}

interface CreateTodoAction {
   type: typeof CREATE_TODO,
   payload: {
      todo: string,
      completed: boolean,
      creationDate: string
   }
}

interface DeleteTodoAction {
   type: typeof DELETE_TODO,
   payload: string,
}

interface ToggleCompletedAction {
   type: typeof TOGGLE_COMPLETED,
   payload: string,
}

interface toggleShowState {
   type: typeof TOGGLE_SHOW_STATE, 
   payload: "all" | "active" | "completed",
}

export type TodosActionTypes = CreateTodoAction | DeleteTodoAction | ToggleCompletedAction

export type AppActionTypes = toggleShowState