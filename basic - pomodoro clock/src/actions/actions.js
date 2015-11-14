import * as types from '../constants/ActionTypes';

export function setSession (status) {
    return {
        type: 'SESSION_' + status
    };
}

///////////////////////////////////////
export const STATUS_IDLE = {
    type: types.STATUS_IDLE
};

export const STATUS_RESET = {
    type: types.STATUS_RESET
};

export const STATUS_PAUSE = {
    type: types.STATUS_PAUSE
};

export const STATUS_RESUME = {
    type: types.STATUS_RESUME
};

export const STATUS_START = {
    type: types.STATUS_START
};


//////////////////////////////////

export const workAdd = {
    type: types.WORK_ADD,
};

export const workReduce = {
    type: types.WORK_REDUCE,
};

//////////////////////////////////

export const breakAdd = {
    type: types.BREAK_ADD,
};

export const breakReduce = {
    type: types.BREAK_REDUCE,
};

///////////////////////////////////////

export function setTime (time) {
    return {
        type: types.SET_TIME,
        time
    };
}

export function setIntervalId (id) {
    return {
        type: types.SET_INTERVAL_ID,
        id
    };
}

///////////////////////////////////////

export function startTimer () {
    return (dispatch, getState) => {
        var { currentTime, timerId } = getState();
        if (timerId === null) {
            const timer = setInterval(() => {
                --currentTime;
                dispatch(setTime(currentTime));
            }, 1000);
            dispatch(setIntervalId(timer));
        }
    };
}

export function stopTimer () {
    return (dispatch, getState) => {
        var { status, timerId } = getState();
        if ( status === types.STATUS_IDLE || types.STATUS_PAUSE) {
            if (timerId !== null) {
                clearInterval(timerId);
                dispatch(setIntervalId(null));
            }
        }
    };
}
