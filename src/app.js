import React from 'react'
import  {useDispatch,useSelector} from 'react-redux'
import {fetchTodos} from "./store/slice"

import './App.css'

export default function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    console.log(state.todo.isLoading);
    if(state.todo.isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div className='App'>
      <button onClick={(e) => dispatch(fetchTodos())} >Fetch Todos</button>
      {
       state.todo.data && state.todo.data.map((data) => {
        console.log(data.title);
        return <h1 key={data.id}>{data.title}</h1>
       }) 
      }
    </div>
  )
}
