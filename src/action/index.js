import {INCREMENT,DECREMENT} from './actionType';


export const incrementAction = step =>({
    type: INCREMENT,
    step: step
});

export const decrementAction = step =>({
    type : DECREMENT,
    step : step
});
