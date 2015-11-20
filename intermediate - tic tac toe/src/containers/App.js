import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import End from '../components/End';

class App extends Component {
    render () {
        const { dispatch, state, winner } = this.props;
        var endScreen;
        if (winner) endScreen = <End dispatch={dispatch} winner={winner} />;
        return (
                <div className="container">
                    <Board dispatch={dispatch}
                            winner={winner}
                            state={state} />
                    {endScreen}
                </div>
        );
    }
}

function mapStateToProps (init) {
    const { state, turn, winner } = init;
    return {
        state,
        turn,
        winner
    };
}

export default connect(mapStateToProps)(App);
