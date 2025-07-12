import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
export const initialState = {
    todos:JSON.parse(localStorage.getItem('localTodo'))
}
export const todoSlice = createSlice({
    name: 'TODO',
    initialState,
    reducers: {
        addTodo: function (state, action) {
            const newTodo = {
                id: nanoid(),
                todoTitle: action.payload,
                completed: false
            }
            state.todos.push(newTodo);
            localStorage.setItem('localTodo',JSON.stringify(state.todos))
        },
        deleteTodo: function (state, action) {
            state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload);
            localStorage.setItem('localTodo',JSON.stringify(state.todos))
        }
    }
});

export const {addTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer;