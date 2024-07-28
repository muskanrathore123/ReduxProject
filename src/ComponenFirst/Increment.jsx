import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fActionCreator } from '../ReduxFirst/Action';

function Increment() {
    let incre=useSelector((state)=>state.increment.num)
    let dispatch=useDispatch();
  return (
    <>
    <h1>{incre}</h1>
    <button onClick={()=>dispatch(fActionCreator())}>Increment</button>
    </>
  )
}



export default Increment
