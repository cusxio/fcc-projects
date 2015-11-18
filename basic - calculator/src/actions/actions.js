import * as types from '../constants/ActionTypes';

export const CLEAR = {
    type: types.CLEAR
};

export const BACK = {
    type: types.BACK
};

export const ADD = {
    type: types.ADD
};

export const MINUS = {
    type: types.MINUS
};

export const MULTI = {
    type: types.MULTI
};

export const DIVIDE = {
    type: types.DIVIDE
};

export const EQUAL = {
    type: types.EQUAL
};

export const DOT = {
    type: types.DOT
};

export function setNumber (number) {
    return {
        type: types.NUMBER,
        number
    };
}
