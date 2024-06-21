import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reduxTodos: [],
    completedTodos: [],
};


const reduxTodoSlice = createSlice({
    name: "reduxTodos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let newItem = {
                id: state.reduxTodos.length + 1,
                item: action.payload,
                status: "pending",
            };

            state.reduxTodos = [...state.reduxTodos, newItem];
        },

        deleteTodo: (state, action) => {
            console.log("delete", action.payload);
            const itemId = action.payload;
            const newTodos = state.reduxTodos.filter((todo) => todo.id != itemId);
            console.log("deleting the item with id", newTodos);
            state.reduxTodos = [...newTodos];
        },
        completedTodo:(state,action)=>{
            const completedItem=action.payload;
            state.completedTodos=[...state.completedTodos,completedItem];

            const todosAfterDelete=state.reduxTodos.filter((todo)=>todo.id !=completedItem.id);
            state.reduxTodos=[...todosAfterDelete];
        },

    },
});

export const { addTodo,deleteTodo,completedTodo } = reduxTodoSlice.actions;
export default reduxTodoSlice.reducer;

