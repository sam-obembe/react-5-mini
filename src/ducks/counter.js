
const initialState ={
  currentValue: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const incrementNumber = (num) =>{
  return {
    type: INCREMENT,
    payload: num
  }
}

export const decrementNumber = (num) =>{
  return {
    type: DECREMENT,
    payload: num
  }
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT: return {
      currentValue: state.currentValue + action.payload
    }

    case DECREMENT : return{
      currentValue: state.currentValue - action.payload
    }
    
    default:
    return state
  }
}
