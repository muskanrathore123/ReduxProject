 import { INC_NUM } from "./Action"
 import { DEC_NUM } from "./Action"

let incrState={
    num:1,
}
let decrState={
    num:100,
}

export const incrReducer=(state=incrState,action)=>{
    switch (action.type) {
        case INC_NUM:return{
            ...state,
            num:state.num+1,
        }
        default:return state
    }
}
export const decrReducer=(state=decrState,action)=>{
    switch(action.type){
        case DEC_NUM :return{
            ...state,
            num:state.num-1,
        }
        default:return state
    }
}