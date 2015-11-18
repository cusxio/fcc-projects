import React, { Component } from 'react';

var editSymbol = [
  {
    reg: /\*/g,
    dest: '×'
  }, {
    reg: /\//g,
    dest: '÷'
  }
];

export default class ResultPanel extends Component {
    render () {
        var { result } = this.props;
        editSymbol.forEach((item) => {
            result.last = result.last.replace(item.reg, item.dest);
            result.current = result.current.replace(item.reg, item.dest);
        });
        return (
            <div className="result-panel">
                <div className="last-result">{result.last}</div>
                <div className="current-result">{result.current}</div>
            </div>
        );
    }
}
