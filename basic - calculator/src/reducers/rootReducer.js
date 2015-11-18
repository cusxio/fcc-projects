/*eslint-disable no-eval*/
import * as types from '../constants/ActionTypes';

const initialState = {
    last: '',
    current: '0'
};

export default function rootReducer (state = initialState, action) {
    var current, last;
    switch (action.type) {
        case types.CLEAR:
            return Object.assign({}, initialState);
        case types.BACK:
            return Object.assign({}, state, {
                current: state.current === '0' ? state.current : state.current.slice(0, -1) || '0'
            });
            //falls through
        case types.ADD:
            current = state.current;
            last = current.slice(-1);
            if (last === '+' || last === '-' || last === '*' || last === '/') {
                return Object.assign({}, state, {
                    current: current.slice(0, -1) + '+'
                });
            } else {
                return Object.assign({}, state, {
                    current: current + '+'
                });
            }
            //falls through
        case types.MINUS:
            current = state.current;
            last = current.slice(-1);
            if (last === '+' || last === '-' || last === '*' || last === '/') {
                return Object.assign({}, state, {
                    current: current.slice(0, -1) + '-'
                });
            } else {
                return Object.assign({}, state, {
                    current: current + '-'
                });
            }
            //falls through
        case types.MULTI:
            current = state.current;
            last = current.slice(-1);
            if (last === '+' || last === '-' || last === '*' || last === '/') {
                return Object.assign({}, state, {
                    current: current.slice(0, -1) + '*'
                });
            } else {
                return Object.assign({}, state, {
                    current: current + '*'
                });
            }
            //falls through
        case types.DIVIDE:
            current = state.current;
            last = current.slice(-1);
            if (last === '+' || last === '-' || last === '*' || last === '/') {
                return Object.assign({}, state, {
                    current: current.slice(0, -1) + '/'
                });
            } else {
                return Object.assign({}, state, {
                    current: current + '/'
                });
            }
            //falls through
        case types.EQUAL:
            try {
                return Object.assign({}, state, {
                    last: state.current + '=',
                    current: eval(state.current).toFixed(2) + ''
                });
            } catch (e) {
                return Object.assign({}, state, {
                    last: state.current + '=',
                    current: 'ERROR - NAN'
                });
            }
            // falls through
        case types.NUMBER:
            return Object.assign({}, state, {
                current: state.current === '0' ? action.number : state.current + action.number
            });
            // falls through
        case types.DOT:
            current = state.current;
            var lastLetter = current.slice(-1);
            if (lastLetter !== '.') {
                return Object.assign({}, state, {
                    current: state.current + '.'
                });
            }
            // falls through
        default:
            return state;
    }
}
