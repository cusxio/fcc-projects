import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultPanel from '../components/ResultPanel';
import ButtonPanel from '../components/ButtonPanel';
import { setNumber, ADD, MINUS, MULTI, DIVIDE, DOT, EQUAL, CLEAR, BACK } from '../actions/actions';
import * as types from '../constants/ActionTypes';
class CalculatorApp extends Component {
    constructor () {
        super();
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler (type, value) {
        const { dispatch } = this.props;
        if (type === 'NUMBER') {
            dispatch(setNumber(value));
        } else if (type === 'OPERATION') {
            if (value === types.ADD) dispatch(ADD);
            if (value === types.MINUS) dispatch(MINUS);
            if (value === types.MULTI) dispatch(MULTI);
            if (value === types.DIVIDE) dispatch(DIVIDE);
        } else if (type === 'DOT') {
            dispatch(DOT);
        } else if (type === 'EQUAL') {
            dispatch(EQUAL);
        } else if (type === 'CLEAR') {
            dispatch(CLEAR);
        } else if (type === 'BACK') {
            dispatch(BACK);
        }
    }
    render () {
        const { last, current } = this.props;
        var result = {
            last,
            current
        };
        return (
            <div className='calculator-container'>
                <ResultPanel result={result} />
                <ButtonPanel onClick={this.eventHandler}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { last, current } = state;
    return {
        last,
        current
    };
}

export default connect(mapStateToProps)(CalculatorApp);
