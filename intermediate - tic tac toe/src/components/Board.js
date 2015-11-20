import React, { Component } from 'react';
import { makeMove } from '../actions/actions';
import classNames from 'classnames';

export default class Board extends Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (event) {
        const { dispatch } = this.props;
        let index = event.target.dataset.index;
        if (event.target.innerHTML === '') event.target.innerHTML = 'O';
        dispatch(makeMove(index));
    }
    render () {
        const { state, winner } = this.props;
        function symbol (index) {
            if (state[index] !== '-') {
                return state[index];
            } else {
                return false;
            }
        }
        var blurClass = classNames({
            board: true,
            row: true,
            'blur-in': winner !== null
        });
        return (
            <div className={blurClass}>
                <div className="s3 column">
                    <div className="s1 row">
                        <button className="button s1" data-index="0" onClick={this.handleClick}>{symbol(0)}</button>
                        <button className="button s1" data-index="1" onClick={this.handleClick}>{symbol(1)}</button>
                        <button className="button s1" data-index="2" onClick={this.handleClick}>{symbol(2)}</button>
                    </div>
                    <div className="s1 row">
                        <button className="button s1" data-index="3" onClick={this.handleClick}>{symbol(3)}</button>
                        <button className="button s1" data-index="4" onClick={this.handleClick}>{symbol(4)}</button>
                        <button className="button s1" data-index="5" onClick={this.handleClick}>{symbol(5)}</button>
                    </div>
                    <div className="s1 row">
                        <button className="button s1" data-index="6" onClick={this.handleClick}>{symbol(6)}</button>
                        <button className="button s1" data-index="7" onClick={this.handleClick}>{symbol(7)}</button>
                        <button className="button s1" data-index="8" onClick={this.handleClick}>{symbol(8)}</button>
                    </div>
                </div>
            </div>
        );
    }
}
