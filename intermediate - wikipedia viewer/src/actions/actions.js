import * as types from '../constants/actionTypes';
import jsonp from 'jsonp';

export const searchIDLE = {
    type: types.SEARCH_IDLE
};

export const searchPENDING = {
    type: types.SEARCH_PENDING
};

function apiCall (searchTerm, dispatch) {
    jsonp(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=10&namespace=0&format=json`, null, function (err, data) {
        if (err) {
            console.error(err.message);
        } else {
            var title = data[1];
            var content = data[2];
            var links = data[3];
            var res = [];
            for (var i = 0; i < 10; i++) {
                if (links[i] !== undefined) {
                    var obj = {
                        title: title[i],
                        content: content[i],
                        link: links[i]
                    };
                    res.push(obj);
                }
            }
            dispatch({
                type: types.SEARCH_DONE,
                posts: res
            });
        }
    });
}

export function searchAPI (searchTerm) {
    return dispatch => {
        dispatch(searchPENDING);
        return apiCall(searchTerm, dispatch);
    };
}
