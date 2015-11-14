import React, { Component } from 'react';

export default class SearchInput extends Component {
    render () {
        const { onKeyDown } = this.props;
        return (
            <div>
                <input className="searchInput" type="text" onKeyUp={e => onKeyDown(e.target.value)} placeholder=" Search..." />
            </div>
        );
    }
}
