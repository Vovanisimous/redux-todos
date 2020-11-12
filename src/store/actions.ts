import { CREATE_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_SHOW_STATE } from "./types";

export function createTodo(todoTitle: string) {
   return {
      type: CREATE_TODO,
      payload: {
         todo: todoTitle,
         completed: false 
      }
   }
}

export function deleteTodo(todoTitle: string) {
   return {
      type: DELETE_TODO,
      payload: todoTitle
   }
}
export function toggleCompleted(todoTitle: string) {
   return {
      type: TOGGLE_COMPLETED,
      payload: todoTitle
   }
} 

export function toggleShowState(show: "all" | "active" | "completed") {
   return {
      type: TOGGLE_SHOW_STATE,
      payload: show
   }
}