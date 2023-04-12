import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        value: '',
        todos: [],
        newValue: ''
    },
    reducers: {
        changeTodoValue: (state, action) => {
            state.value = action.payload
        },
        addTodo: (state, action) => {
            let id = 1
            if(state.todos.length > 0) {
                id = state.todos[state.todos.length -1].id + 1
            }
            state.todos = [...state.todos, {id, text: action.payload, status: false, show: false}]
            state.value = ""
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            const filteredTodos = state.todos.filter(todo => +todo.id !== +id)

            state.todos = filteredTodos
        },
        changeStatus: (state, action) => {
            const id = action.payload.id
            const status = action.payload.status

            const newArray = state.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        status
                    }
                }
                else return todo
            })
            state.todos = newArray
        },
        deleteAll: (state, action) => {
            state.todos = []
        },
        editTodo: (state, action) => {
            const edit = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.show = true
                }
            });
        },
        editInput: (state, action) => {
            state.newValue = action.payload
        },
        saveEdit: (state, action) => {
            const id = action.payload.id
            const save = state.todos.map(todo => {
                if (todo.id === id) {
                    state.value = action.payload.newValue
                    todo.show = false
                } else {
                    return todo
                }
            })
        },
        cancelEdit: (state, action) => {
            const cancel = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.show = false
                }
            })
        }
    }
})

export const {changeTodoValue, addTodo, deleteTodo, changeStatus, deleteAll, editTodo, editInput, saveEdit, cancelEdit} = todoSlice.actions

export default todoSlice.reducer