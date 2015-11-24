import React, { Component } from 'react';
import { setActiveTab } from '../actions/actions';
import classNames from 'classnames';

export default class TabsMenu extends Component {
    click (e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(setActiveTab(e.target.dataset.tab));
    }
    isActive (tab) {
        const { active } = this.props;
        return classNames({
            'tabs__menu--item': true,
            active: tab === active
        });
    }
    render () {
        return (
            <ul className="tabs__menu">
                <li className={this.isActive('all')}>
                    <a data-tab="all" onClick={this.click.bind(this)} href="">All</a>
                </li>
                <li className={this.isActive('online')}>
                    <a data-tab="online" onClick={this.click.bind(this)} href="">Online</a>
                </li>
                <li className={this.isActive('offline')}>
                    <a data-tab="offline" onClick={this.click.bind(this)} href="">Offline</a>
                </li>
            </ul>
        );
    }
}
