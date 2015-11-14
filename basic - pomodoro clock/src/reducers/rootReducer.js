import * as types from '../constants/ActionTypes';

const initialState = {
    session: types.SESSION_IDLE,
    status: types.STATUS_IDLE,
    workTime: 1500, // 25minutes - 1500
    breakTime: 300, // 5 minutes - 300
    currentTime: 1500, // 25minutes - 1500
    timerId: null
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case types.SESSION_IDLE:
            return state;
        case types.SESSION_BREAK:
            return Object.assign({}, state, {
                session: action.type
            });
        case types.SESSION_WORK:
            return Object.assign({}, state, {
                session: action.type
            });
        //////////////////////////////////////////
        case types.STATUS_PAUSE:
            return Object.assign({}, state, {
                status: action.type
            });
        case types.STATUS_RESUME:
            return Object.assign({}, state, {
                status: action.type
            });
        case types.STATUS_START:
            return Object.assign({}, state, {
                status: action.type
            });
        case types.STATUS_RESET:
            return Object.assign({}, initialState);
        //////////////////////////////////////////
        case types.WORK_ADD:
            return Object.assign({}, state, {
                workTime: state.workTime + (1 * 60),
                currentTime: state.workTime + (1 * 60)
            });
        case types.WORK_REDUCE:
            return Object.assign({}, state, {
                workTime: state.workTime - (1 * 60),
                currentTime: state.workTime - (1 * 60)
            });
        //////////////////////////////////////////
        case types.BREAK_ADD:
            return Object.assign({}, state, {
                breakTime: state.breakTime + (1 * 60)
            });
        case types.BREAK_REDUCE:
            return Object.assign({}, state, {
                breakTime: state.breakTime - (1 * 60)
            });
        //////////////////////////////////////////
        case types.SET_INTERVAL_ID:
            return Object.assign({}, state, {
                timerId: action.id
            });
        case types.SET_TIME:
            return Object.assign({}, state, {
                currentTime: action.time
            });
        //////////////////////////////////////////
        default:
            return state;
    }
}
