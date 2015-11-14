import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import Session from '../components/Session';

class PomoApp extends Component {
    render () {
        const { currentTime, status, dispatch, workTime, breakTime, session } = this.props;
        var currentStatus = ' Let\'s Get Started !';
        if (session === 'SESSION_BREAK') {
            currentStatus = 'Taking a break....';
        } else if (session === 'SESSION_WORK') {
            currentStatus = 'Working !';
        }
        return (
            <div className='container'>
                <div className="c1">
                    <div className="c2">
                        <Session dispatch={dispatch}
                                workTime={workTime}
                                breakTime={breakTime}
                                session={session}>
                        </Session>
                        <Timer className='timer' dispatch={dispatch}
                                time={currentTime}
                                status={status}
                                workTime={workTime}
                                breakTime={breakTime}
                                session={session}>
                         </Timer>
                         <h4>Status: { currentStatus }</h4>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { session, status, workTime, breakTime, currentTime } = state;
    return {
        session,
        status,
        workTime,
        breakTime,
        currentTime
    };
}

export default connect(mapStateToProps)(PomoApp);
