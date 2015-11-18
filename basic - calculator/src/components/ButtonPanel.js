import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class ButtonPanel extends Component {
    constructor () {
        super();
        this.keyMap = {};
        this.lastClicked = null;
        this.dotClicked = false;
        this.eventHandler = this.eventHandler.bind(this);
    }
    componentDidMount () {
        var dom = ReactDOM.findDOMNode(this);
        var buttons = dom.querySelectorAll('button');
        buttons = [].slice.call(buttons);
        buttons.forEach(button => {
            this.keyMap[button.dataset.code] = button;
            if (button.dataset.numpad) this.keyMap[button.dataset.numpad] = button;
        });
        window.onkeydown = event => {
            var key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
            var button = this.keyMap[key];
            if (button) {
                button.click();
                event.stopPropagation();
                event.preventDefault();
            }
        };
    }
    eventHandler (event) {
        const { onClick } = this.props;
        var type = event.target.dataset.type;
        var value = event.target.dataset.value;
        this.lastClicked = type;
        if (this.lastClicked === 'NUMBER') {
            onClick(type, value);
        } else if (this.lastClicked === 'DOT' && this.dotClicked === false) {
            this.dotClicked = true;
            onClick(type, value);
        } else if (this.lastClicked === 'OPERATION') {
            this.dotClicked = false;
            onClick(type, value);
        } else if (this.lastClicked === 'EQUAL' || this.lastClicked === 'CLEAR' || this.lastClicked === 'BACK') {
            if (this.lastClicked === 'CLEAR') this.dotClicked = false;
            onClick(type, value);
        }
    }
    render () {
        return (
            <div className="button-panel row">
                <div className="s3 column">
                    <div className="s1 row">
                        <button className="button button-clear s1" data-code='67' data-value='CLEAR' data-type='CLEAR' onClick={this.eventHandler}>C</button>
                        <button className="button s1" data-code='8' data-value='BACK' data-type='BACK' onClick={this.eventHandler}>←</button>
                        <button className="button s1" data-numpad='111' data-code='191' data-value='/' data-type='OPERATION' onClick={this.eventHandler}>÷</button>
                    </div>
                    <div className="s1 row">
                        <button className="button s1" data-numpad='103' data-code='55' data-value='7' data-type='NUMBER' onClick={this.eventHandler}>7</button>
                        <button className="button s1" data-numpad='104' data-code='56' data-value='8' data-type='NUMBER' onClick={this.eventHandler}>8</button>
                        <button className="button s1" data-numpad='105' data-code='57' data-value='9' data-type='NUMBER' onClick={this.eventHandler}>9</button>
                    </div>
                    <div className="s1 row">
                        <button className="button s1" data-numpad='100' data-code='52' data-value='4' data-type='NUMBER' onClick={this.eventHandler}>4</button>
                        <button className="button s1" data-numpad='101' data-code='53' data-value='5' data-type='NUMBER' onClick={this.eventHandler}>5</button>
                        <button className="button s1" data-numpad='102' data-code='54' data-value='6' data-type='NUMBER' onClick={this.eventHandler}>6</button>
                    </div>
                    <div className="s1 row">
                        <button className="button s1" data-numpad='97' data-code='49' data-value='1' data-type='NUMBER' onClick={this.eventHandler}>1</button>
                        <button className="button s1" data-numpad='98' data-code='50' data-value='2' data-type='NUMBER' onClick={this.eventHandler}>2</button>
                        <button className="button s1" data-numpad='99' data-code='51' data-value='3' data-type='NUMBER' onClick={this.eventHandler}>3</button>
                    </div>
                    <div className="s1 row">
                        <button className="button s2" data-numpad='96' data-code='48' data-value='0' data-type='NUMBER' onClick={this.eventHandler}>0</button>
                        <button className="button s1" data-numpad='110' data-code='190' data-value='.' data-type='DOT' onClick={this.eventHandler}>.</button>
                    </div>
                </div>
                <div className="s1 column">
                        <button className="button s1" data-numpad='106' data-code='shift+56' data-value='*' data-type='OPERATION' onClick={this.eventHandler}>×</button>
                        <button className="button s1" data-numpad='109' data-code='189' data-value='-' data-type='OPERATION' onClick={this.eventHandler}>-</button>
                        <button className="button s1" data-numpad='107' data-code='187' data-value='+' data-type='OPERATION' onClick={this.eventHandler}>+</button>
                        <button className="button s2 button-equal" data-code='13' data-value='=' data-type='EQUAL' onClick={this.eventHandler}>=</button>
                </div>
            </div>
        );
    }
}
