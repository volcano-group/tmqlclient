import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post'

/**
 * This React component is responsible for querying Apollo for the posts
 * and passing the results to the child Post components for rendering
 */
class Posts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let users = <div>Users</div>
        console.log(this.props.data)
        if (this.props.data.getUsers && this.props.data.getUsers instanceof Array) {
            users = (
                <div>
                    <h2>User</h2>
                    {this.props.data.getUsers.map(function(user) {
                        return <Post key={user.id} user={user} />;
                    })}
                </div>
            )
        }

        return users;
    }
}

// Posts requires props with a data attribute of an array of posts
Posts.propTypes = {
    data: PropTypes.shape({
        getUsers: PropTypes.array
    }).isRequired
};

// Define the graphql query to retrieve the posts and the desired attributes
const allUsers = gql`
  query UsersForDisplay {
    getUsers{
  firstName,
  lastName
  id
}
  }
`;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default PostsContainer = graphql(allUsers, {
    options: {pollInterval: 5000}
})(Posts);
