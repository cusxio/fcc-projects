import React, { Component } from 'react';
import classNames from 'classnames';
import { breakAdd, breakReduce, workAdd, workReduce } from '../actions/actions';

export default class Session extends Component {
    constructor (props) {
        super(props);
        this.handleBreakAddClick = this.handleBreakAddClick.bind(this);
        this.handleBreakReduceClick = this.handleBreakReduceClick.bind(this);
        this.handleWorkAddClick = this.handleWorkAddClick.bind(this);
        this.handleWorkReduceClick = this.handleWorkReduceClick.bind(this);
    }
    handleBreakAddClick (e) {
        const { dispatch } = this.props;
            e.preventDefault();
            dispatch(breakAdd);
    }
    handleBreakReduceClick (e) {
        const { dispatch, breakTime } = this.props;
        if (breakTime > 60) {
            e.preventDefault();
            dispatch(breakReduce);
        }
    }
    handleWorkAddClick (e) {
        const { dispatch } = this.props;
            e.preventDefault();
            dispatch(workAdd);
    }
    handleWorkReduceClick (e) {
        const { dispatch, workTime } = this.props;
        if (workTime > 60) {
            e.preventDefault();
            dispatch(workReduce);
        }
    }
    render () {
        var { workTime, breakTime, session } = this.props;
        var btnMinusClass = classNames({
            'minus': true,
            'disabled': session === 'SESSION_WORK' || 'SESSION_BREAK',
            'enabled': session === 'SESSION_IDLE'
        });
        var btnAddClass = classNames({
            'plus': true,
            'disabled': session === 'SESSION_WORK' || 'SESSION_BREAK',
            'enabled': session === 'SESSION_IDLE'
        });
        return (
            <div className="session">
                <div className="left">
                    <h2>BREAK</h2>
                    <h3>
                        <span className={btnMinusClass} onClick={this.handleBreakReduceClick}>-</span>
                        <span className="minutes">{ breakTime / 60 }</span>
                        <span className={btnAddClass} onClick={this.handleBreakAddClick}>+</span>
                    </h3>
                </div>
                <div className="right">
                    <h2>WORK</h2>
                    <h3>
                        <span className={btnMinusClass} onClick={this.handleWorkReduceClick}>-</span>
                        <span className="minutes">{workTime / 60}</span>
                        <span className={btnAddClass} onClick={this.handleWorkAddClick}>+</span></h3>
                </div>
            </div>

        );
    }
}
