import React, { Component } from 'react';
import { setSession, startTimer, stopTimer, STATUS_START, STATUS_PAUSE, STATUS_RESET, STATUS_IDLE } from '../actions/actions';
import * as types from '../constants/ActionTypes';
import classNames from 'classnames';

export default class Controller extends Component {
    constructor (props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    handleStartClick (e) {
        const { dispatch, session } = this.props;
        e.preventDefault();
        if (session === types.SESSION_IDLE || session === types.SESSION_WORK ) {
            document.body.style.backgroundColor = '#FF3E41';
            dispatch(setSession('WORK'));
        } else if (session === types.SESSION_BREAK) {
            document.body.style.backgroundColor = '#4CAF50';
            dispatch(setSession('BREAK'));
        }
        dispatch(STATUS_START);
        dispatch(startTimer());
    }
    handlePauseClick (e) {
        const { dispatch } = this.props;
        document.body.style.backgroundColor = '#3EABFF';
        e.preventDefault();
        dispatch(STATUS_PAUSE);
        dispatch(stopTimer());
    }
    handleResetClick (e) {
        document.body.style.backgroundColor = '#3EABFF';
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(setSession('IDLE'));
        dispatch(stopTimer());
        dispatch(STATUS_RESET);
        dispatch(STATUS_IDLE);
    }
    renderButton () {
        const { status, session } = this.props;
        var btnLeft = classNames({
            button: true,
            left: true,
            'button-work': session === types.SESSION_WORK ? true : false,
            'button-break': session === types.SESSION_BREAK ? true : false
        });
        var btnRight = classNames({
            button: true,
            Right: true,
            'button-work': session === types.SESSION_WORK ? true : false,
            'button-break': session === types.SESSION_BREAK ? true : false
        });
        var btn = classNames({
            button: true,
            'button-work': session === types.SESSION_WORK ? true : false,
            'button-break': session === types.SESSION_BREAK ? true : false
        });
        if (status === 'STATUS_START') {
            return (
                <div>
                    <button onClick={this.handlePauseClick} className={btnLeft}>PAUSE
                    </button>
                    <button onClick={this.handleResetClick} className={btnRight}>RESET
                    </button>
                </div>
            );
        } else if (status === 'STATUS_PAUSE' || 'STATUS_IDLE') {
            return (
                <div>
                    <button onClick={this.handleStartClick} className={btn}>{status === 'STATUS_PAUSE' ? 'RESUME' : 'START'}</button>
                </div>
            );
        }
    }
    render () {
        return (
            <div>
                { this.renderButton() }
            </div>
        );
    }
}
