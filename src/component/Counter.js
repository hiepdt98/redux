import React, { Component } from 'react';
import PropTypes from 'prop-types';
import couterContainer from '../containers/counterContainer'

class Counter extends Component{

    handleClickIncrement(){
         this.props.onIncrement(1);
     }
    handleClickDecrement(){
        this.props.onDecrement(1);
    }
    render(){
        return (
            <div className="Counter">
                <h1>Class increment and decrement with saga and redux-react</h1>
                <button onClick={this.handleClickIncrement.bind(this)} type="button" className="btn btn-success">Increment</button>
                <button onClick={this.handleClickDecrement.bind(this)} type="button" className="btn btn-danger">Decrement</button>
                <p>count : {this.props.times}</p>
            </div>
        );
    }

};
export default Counter;
