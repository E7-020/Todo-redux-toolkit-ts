import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("users/upload", async function () {
  const res = await fetch(`https://unicode-todo.onrender.com/todos`);
  return await res.json();
});

export const AddTask = createAsyncThunk(
  "user/create",
  async function (value:string) {
    const res = await fetch(`https://unicode-todo.onrender.com/todos`,{
      method:'POST',
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: value,
        created_at: "1676106043670",
        completed: false,
      })
    })
    const data = await res.json()
    return data
  }

)

export const DeleteTask = createAsyncThunk(
 " user/delete",
 async function(id:string){
  const res = await fetch(`https://unicode-todo.onrender.com/todos/${id}`,{
    method:"DELETE"
  })
  const data = await res.json()
  return id 
 }
)

