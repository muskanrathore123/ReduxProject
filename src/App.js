import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import Count from './Component/Count'
import CounUsingMap from './Component/CounUsingMap'
import Main from './ComponenFirst/Main'

function App() {
  return (
   
    <>
    {/*=========this component for two state and more than one reducer ,folder :-ComponentFirst, ReduxFirst */}
    <Main/>
    </>

    
 // ========this redux for single state and single reducer, folder:- Component,Redux==============
   /*
    <Provider store={store}>
      {/*
      I take  Single State
      <Count/>
      <CounUsingMap/>
    </Provider>
    */
  )
}

export default App
