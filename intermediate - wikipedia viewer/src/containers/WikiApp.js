import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAPI, searchIDLE } from '../actions/actions';
import SearchInput from '../components/SearchInput';
import SearchOutput from '../components/SearchOutput';

class WikiApp extends Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (searchTerm) {
        if (searchTerm === undefined) {
            this.props.dispatch(searchIDLE);
        } else {
            this.props.dispatch(searchAPI(searchTerm));
        }
    }
    render () {
        const { posts, status } = this.props;
        return (
            <div className="box">
                <h1 className="wiki">Zipline Wikipedia</h1>
                <SearchInput onKeyDown={this.handleChange}></SearchInput>
            {
              (() => {
                if (status === 'SEARCH_DONE') {
                  return (
                    <SearchOutput posts={posts}></SearchOutput>
                  );
                }
              })()
            }
            </div>
        );
    }
}

function mapStateToProps (state) {
    const status = state.get('type');
    const posts = state.get('posts');
    return {
        status,
        posts
    };
}

export default connect(mapStateToProps)(WikiApp);
