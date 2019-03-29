import React, { Component } from 'react';
import {connect} from 'react-redux';
import Counter  from '../component/Counter';
import {incrementAction} from '../action/index';
import {decrementAction} from '../action/index';


const mapStateToProps = (state) => ({
        times: state.counterReducer ? state.counterReducer : 0
});
const mapDispatchToProps = dispatch => ({
    onDecrement: (step) => {
        dispatch(decrementAction(step));
    },
    onIncrement: (step) => {
        dispatch(incrementAction(step));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
