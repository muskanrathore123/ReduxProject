import { COUNT_DOWN } from "./Action"
import { DEC_COUNT } from "./Action"
let initalState={
    noOfCount:5
}


const reducer=(state=initalState,action)=>{
 switch(action.type){
    case COUNT_DOWN : return {
        
        ...state, 
        noOfCount:state.noOfCount+1
    }
    case DEC_COUNT :
        return{
         ...state, 
            noOfCount:state.noOfCount-1    
    }
    default:return state
 }
}
export default reducer