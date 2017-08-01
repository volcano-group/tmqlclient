import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>User</h3>
            <div>{this.props.user.firstName}</div>
            <div>{this.props.user.lastName}</div>
            </div>
        )
    }
}

// Post requires props with a post attribute with a content attribute of type string
Post.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }).isRequired
};
