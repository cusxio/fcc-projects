import * as types from '../constants/ActionTypes';

const initialState = {
    ai_symbol: 'X',
    player_smybol: 'O',
    state: '---------',
    playing: 'O',
    winner: null
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case types.SET_BOARD:
            return Object.assign({}, state, {
                state: action.state
            });
        case types.SET_PLAYING:
            return Object.assign({}, state, {
                playing: action.playing
            });
        case types.AI_MOVE:
        case types.PLAYER_MOVE:
        case types.RESTART:
            return Object.assign({}, initialState);
        case types.WINNER:
            return Object.assign({}, state, {
                winner: action.winner
            });
        default:
            return state;
    }
}
