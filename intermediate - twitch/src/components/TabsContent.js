import React, { Component } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

export default class Tabs extends Component {
    constructor () {
        super();
    }
    componentWillMount () {
        const { online } = this.props;
        this.filteredOnline = online;
    }
    renderList (tab) {
        const { online, offline } = this.props;
        if (tab === 'online') {
            return (
                <ul>
                    {online.map(stream => {
                        return (
                            <a key={stream.name} href={stream.link} target='_blank'>
                            <li>
                                <img className='avatar' src={stream.logo} alt={stream.name}/>
                                <span className='name'>{stream.name}<span className='status'>{stream.status}</span></span>
                                <i className="icon ion-checkmark-round"></i>
                            </li>
                            </a>
                        );
                    })}
                </ul>
            );
        } else if (tab === 'offline') {
            return (
                <ul>
                    {offline.map(stream => {
                        return (
                            <a key={stream.name} href={stream.link} target='_blank'>
                            <li>
                                <img className='avatar' src={stream.logo} alt={stream.name}/>
                                <span className='name'>{stream.name}</span>
                                <i className="icon ion-close-round"></i>
                            </li>
                            </a>
                        );
                    })}
                </ul>
            );
        } else if (tab === 'all') {
            return (
                <ul>
                    {online.map(stream => {
                        return (
                            <a key={stream.name} href={stream.link} target='_blank'>
                            <li>
                                <img className='avatar' src={stream.logo} alt={stream.name}/>
                                <span className='name'>{stream.name}<span className='status'>{stream.status}</span></span>
                                <i className="icon ion-checkmark-round"></i>
                            </li>
                            </a>
                        );
                    })}
                    {offline.map(stream => {
                        return (
                            <a key={stream.name} href={stream.link} target='_blank'>
                            <li>
                                <img className='avatar' src={stream.logo} alt={stream.name}/>
                                <span className='name'>{stream.name}</span>
                                <i className="icon ion-close-round"></i>
                            </li>
                            </a>
                        );
                    })}
                </ul>
            );
        }
    }
    renderContentTab () {
        const { active } = this.props;
        if (active === 'all') {
            return (
                <div key={'all'} className="tabs__content">
                <div className="tabs__content--item tab-all">
                    {this.renderList('all')}
                </div>
                </div>
            );
        } else if (active === 'online') {
            return (
                <div key={'online'} className="tabs__content">
                <div className="tabs__content--item tab-online">
                    {this.renderList('online')}
                </div>
                </div>
            );
        } else if (active === 'offline') {
            return (
                <div key={'offline'} className="tabs__content">
                <div className="tabs__content--item tab-offline">
                    {this.renderList('offline')}
                </div>
                </div>
            );
        }
    }
    render () {
        return (
            <div>
            {/*<input placeholder="Search ..." type="text" onChange={this.search.bind(this)}/>*/}
            <VelocityTransitionGroup enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}}>
                {this.renderContentTab()}
            </VelocityTransitionGroup>
            </div>
        );
    }
}
