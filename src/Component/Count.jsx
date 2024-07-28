import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countDown, decCount } from '../Redux/Action';

function Count() {
    let select=useSelector((state)=>state.noOfCount);
    let dispatch=useDispatch();
  return (
    <div>
        <h1>{select}</h1>
      <button onClick={()=>dispatch(countDown())}>Increment</button>
      <button onClick={()=>dispatch(decCount())}>Decrement</button>
    </div>
  )
}

export default Count
