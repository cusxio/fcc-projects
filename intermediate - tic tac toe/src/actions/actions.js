/*eslint-disable no-use-before-define*/
import * as types from '../constants/ActionTypes';
import axios from 'axios';

export const RESTART = {
    type: types.RESTART
};

export const AI_MOVE = {
    type: types.AI_MOVE
};

function setBoard (state) {
    return {
        type: types.SET_BOARD,
        state: state
    };
}

function setPlaying (playing) {
    return {
        type: types.SET_PLAYING,
        playing
    };
}

function WINNER (winner) {
    return {
        type: types.WINNER,
        winner
    };
}

function checkWinner () {
        return (dispatch, getState) => {
        const { state } = getState();
        var stateArr = state.split('');
        if (stateArr[0] === 'X' && stateArr[1] === 'X' && stateArr[2] === 'X') {
            dispatch(WINNER(stateArr[0]));
        } else if (stateArr[3] === 'X' && stateArr[4] === 'X' && stateArr[5] === 'X') {
            dispatch(WINNER(stateArr[3]));
        } else if (stateArr[6] === 'X' && stateArr[7] === 'X' && stateArr[8] === 'X') {
            dispatch(WINNER(stateArr[6]));
        } else if (stateArr[0] === 'X' && stateArr[4] === 'X' && stateArr[8] === 'X') {
            dispatch(WINNER(stateArr[0]));
        } else if (stateArr[2] === 'X' && stateArr[4] === 'X' && stateArr[6] === 'X') {
            dispatch(WINNER(stateArr[2]));
        } else if (stateArr[0] === 'X' && stateArr[3] === 'X' && stateArr[6] === 'X') {
            dispatch(WINNER(stateArr[0])); // verti
        } else if (stateArr[1] === 'X' && stateArr[4] === 'X' && stateArr[7] === 'X') {
            dispatch(WINNER(stateArr[2]));
        } else if (stateArr[2] === 'X' && stateArr[5] === 'X' && stateArr[8] === 'X') {
            dispatch(WINNER(stateArr[2]));
        } else if (!state.match('-')) {
            dispatch(WINNER('NA'));
        }
    };
}

function moveAI () {
    return (dispatch, getState) => {
        const { state, playing } = getState();
        axios.get(`http://tttapi.herokuapp.com/api/v1/${state}/${playing}`)
            .then(function (response) {
                var index = response.data.recommendation;
                dispatch(makeMove(index));
            });
    };
}

export function makeMove (index) {
    return (dispatch, getState) => {
        var { state, playing } = getState();
        if (state[index] === '-') {
            var stateArr = state.split('');
            stateArr.splice(index, 1, playing);
            var stateStr = stateArr.join('');
            dispatch(setBoard(stateStr));
            dispatch(checkWinner());
            if (playing === 'O') {
                dispatch(setPlaying('X'));
                dispatch(moveAI());
            } else {
                dispatch(setPlaying('O'));
            }
        }
    };
}
