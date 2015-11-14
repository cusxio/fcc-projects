import React, { Component } from 'react';

export default class SearchOutput extends Component {
    render () {
        const { posts } = this.props;
        return (
            <div className="searchOutput">
                { posts.map((post, index) => {
                    return (
                        <div className="individualOutput" key={index}>
                            <a href={post.link} target="_blank">
                                <h4>{post.title}</h4>
                                <div>{post.content}</div>
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }
}
