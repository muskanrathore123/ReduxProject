import React from 'react'
import { connect } from 'react-redux'
import { countDown } from '../Redux/Action'

function CounUsingMap(props) {
  return (
    <>
      <h1>
        Count : {props.count}
        <button onClick={props.countInc}>Increment</button>
      </h1>
    </>
  )
}

const mapStateToProps=(state)=>{
    return{
        count:state.noOfCount,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        countInc:()=>dispatch(countDown())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounUsingMap);
