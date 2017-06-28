import React, { Component } from 'react';
import '../styles/post.css'

export class Post extends Component {
    render() {
        const {body, title} = this.props;

        return (
            <div className="post">
                <h3 className="post__title">
                    {title}
                </h3>
                <div className="post__body">
                    <p>
                        {body}
                    </p>
                </div>
            </div>
        );
    }
}
