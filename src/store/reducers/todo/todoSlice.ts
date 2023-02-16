import { todoState, ITodos } from "../../../types/ITodo";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {checkbox,DeleteTask, AddTask, getTodos } from "./todoAction";


const initialState:todoState = {
    todos:[],
    isLoading:false
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getTodos.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getTodos.fulfilled, (state, action: PayloadAction<ITodos[]>) => {
            state.isLoading = false
            state.todos = action.payload
        })

        builder.addCase(AddTask.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(AddTask.fulfilled, (state, action: PayloadAction<ITodos>) => {
            state.isLoading = false
            state.todos.push(action.payload) 
        })

        builder.addCase(DeleteTask.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(DeleteTask.fulfilled, (state, action:PayloadAction<string>) => {
            state.isLoading = false
            state.todos = state.todos.filter(item => item._id !== action.payload)
        })

        builder.addCase(checkbox.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(checkbox.fulfilled, (state, action:PayloadAction<ITodos>) => {
            state.isLoading = false
            state.todos = state.todos.map(item => item._id === action.payload._id? action.payload:item)
        })
    },
})

export default todoSlice.reducer;