import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


export const fetchTodos = createAsyncThunk("fetchTodos" , async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return res.json();
})
const todo = createSlice ({
    name:"todo",
    initialState: {
        isLoading:false,
        data : null,
        isError:false
    },
    extraReducers : (builder) => {
        builder.addCase(fetchTodos.pending , (state,action) => {
            state.isLoading = true;
            state.data = action.payload
        });
        builder.addCase(fetchTodos.fulfilled , (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchTodos.rejected , (state,action) => {
            console.log(action.payload);
            state.isError = true;
        })
    }
})

export default todo.reducer;