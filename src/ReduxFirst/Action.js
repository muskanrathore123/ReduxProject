export let INC_NUM='INC_NUM';
export let DEC_NUM='DEC_NUM';


export const fActionCreator=()=>{
    return{
        type:INC_NUM,
    }
}

export const sActionCreator=()=>{
    return{
        type:DEC_NUM,
    }
}