import React, { Component } from 'react';
import { RESTART } from '../actions/actions';
import classNames from 'classnames';

export default class End extends Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        const { dispatch } = this.props;
        var dom = document.getElementById('restart');
        dom.className = 'fadeOut';
        dispatch(RESTART);
    }
    render () {
        const { winner } = this.props;
        var displayWinner;
        if (winner === 'X') {
            displayWinner = 'AI WINS !';
        } else if (winner === 'O') {
            displayWinner = 'YOU WIN !';
        } else {
            displayWinner = 'DRAW !';
        }
        var resultClass = classNames({
            results: true,
            animated: true,
            fadeIn: winner !== null
        });
        return (
            <div className={resultClass} id='restart'>
                <div className="results-container">
                    <div className="c1">
                        <div className="c2">
                            <div className="control">
                                <div className="c1">
                                    <div className="c2">
                                        <div className="top">RESULT</div>
                                        <h1>{displayWinner}</h1>
                                        <div className="button" onClick={this.handleClick}>RESTART</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
