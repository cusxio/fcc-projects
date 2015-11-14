import React, { Component } from 'react';
import Controller from '../components/Controller';
import { setSession, STATUS_START, setTime, startTimer, stopTimer } from '../actions/actions';

export default class Timer extends Component {
    componentWillReceiveProps (props) {
        const { time, dispatch, breakTime, session, workTime } = props;
            if (time === 0 && session === 'SESSION_WORK') {
                document.body.style.backgroundColor = '#4CAF50';
                dispatch(stopTimer());
                dispatch(setSession('BREAK'));
                dispatch(STATUS_START);
                dispatch(setTime(breakTime));
                dispatch(startTimer());
            } else if ( time === 0 && session === 'SESSION_BREAK') {
                document.body.style.backgroundColor = '#FF3E41';
                dispatch(stopTimer());
                dispatch(setSession('WORK'));
                dispatch(STATUS_START);
                dispatch(setTime(workTime));
                dispatch(startTimer());
            }
    }
    render () {
        var { dispatch, time, status, session } = this.props;
        let minutes = parseInt(time / 60);
        let seconds = parseInt(time % 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        var currentTime = `${minutes} : ${seconds}`;
        return (
            <div>
                <div className='time'>{ currentTime }</div>
                <Controller dispatch={dispatch} status={status} session={session}></Controller>
            </div>

        );
    }
}
