import React, { Component } from 'react';
import TabsMenu from './TabsMenu';
import TabsContent from './TabsContent';

export default class Tabs extends Component {
    render () {
        const { active, dispatch, online, offline } = this.props;
        return (
            <div className="tabs">
                <TabsMenu dispatch={dispatch}
                            active={active} />
                <TabsContent online={online} offline={offline} active={active}/>
            </div>
        );
    }
}
