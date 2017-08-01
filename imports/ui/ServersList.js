import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Server from './Server'

/**
 * This React component is responsible for querying Apollo for the posts
 * and passing the results to the child Post components for rendering
 */
class Serverss extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let servers = <div>Servers</div>
        console.log(this.props.data)
        if (this.props.data.listInstances && this.props.data.listInstances instanceof Array) {
            servers = (
                <div>
                    <h2>Server</h2>
                    {this.props.data.listInstances.map(function(instance, index) {
                        return <Server key={index} data={instance}/>
                    })}
                </div>
            )
        }

        return servers
    }
}



// Define the graphql query to retrieve the posts and the desired attributes
const serversList = gql`
    query serverList {
        listInstances{
            name
            status
            ips
        }
    }
`;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default ServersList = graphql(serversList, {
    options: {pollInterval: 1000}
})(Serverss);