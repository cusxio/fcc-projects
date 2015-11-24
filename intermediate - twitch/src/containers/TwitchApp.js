import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/Tabs';
import { twitchApiCall } from '../actions/actions';

class TwitchApp extends Component {
    componentWillMount () {
        const { dispatch } = this.props;
        dispatch(twitchApiCall());
    }
    renderTabs () {
        const { active, dispatch, online, offline, status } = this.props;
        if (status === 'DONE') {
            return (
                <Tabs dispatch={dispatch}
                    active={active}
                    online={online}
                    offline={offline} />
            );
        } else if (status === 'PENDING') {
            return (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            );
        }
    }
    render () {
        return (
            <div>
                {this.renderTabs()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    const {active, online, offline, status } = state;
    return {
        active,
        online,
        offline,
        status
    };
}

export default connect(mapStateToProps)(TwitchApp);
