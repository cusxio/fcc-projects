import { SEARCH_PENDING, SEARCH_DONE, SEARCH_IDLE } from '../constants/actionTypes';
import { Map } from 'immutable';

export default function rootReducer (state = Map({ type: 'IDLE', posts: [] }), action) {
    switch (action.type) {
        case SEARCH_IDLE:
            return state.set('type', SEARCH_IDLE);
        case SEARCH_PENDING:
            return state.set('type', SEARCH_PENDING);
        case SEARCH_DONE:
            let posts = Map({posts: action.posts});
            return state.set('type', SEARCH_DONE).merge(posts);
        default:
            return state;
    }
}
