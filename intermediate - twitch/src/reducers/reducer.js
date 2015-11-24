import * as types from '../constants/ActionTypes';

const initialState = {
    active: 'all',
    online: [],
    offline: [],
    status: 'PENDING',
    search: 'SEARCH_IDLE'
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case types.SET_ACTIVE_TAB:
            return Object.assign({}, state, {
                active: action.active
            });
        case types.TWITCH_OFFLINE:
            return Object.assign({}, state, {
                offline: action.offline
            });
        case types.TWITCH_ONLINE:
            return Object.assign({}, state, {
                online: action.online
            });
        case types.STATUS_DONE:
            return Object.assign({}, state, {
                status: action.status
            });
        case types.SEARCH_PENDING:
            console.log('here');
            return Object.assign({}, state, {
                search: action.type
            });
        default:
            return state;
    }
}
