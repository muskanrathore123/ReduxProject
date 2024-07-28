import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../ReduxFirst/store'
import Increment from './Increment'
import Decrement from './Decrement'
function Main() {
  return (
    <>
    <Provider store={store}>
        <Increment/>
        <Decrement/>
    </Provider>
      
    </>
  )
}

export default Main
