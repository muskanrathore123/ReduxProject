
export let COUNT_DOWN='COUNT_DOWN';
export let DEC_COUNT='DEC_COUNT';

export const countDown=()=>{
    return{
        type:COUNT_DOWN,
    }
}

export const decCount=()=>{
    return {
        type:DEC_COUNT,
    }
}