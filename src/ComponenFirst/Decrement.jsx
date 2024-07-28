import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fActionCreator, sActionCreator } from "../ReduxFirst/Action";


function Decrement() {
  let incre = useSelector((state) => state.decrement.num);
  let dispatch = useDispatch();
  return (
    <>
      <h1>{incre}</h1>
      <button onClick={() => dispatch(sActionCreator())}>Decrement</button>
    </>
  );
}

export default Decrement
