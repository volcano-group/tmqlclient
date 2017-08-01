import React, { Component, PropTypes } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post'


class ParseForm  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUrl: '',
            associationUrl: 'https://docs.google.com/spreadsheets/d/1RYkMLABtWgEq0n1_Xyf3RPin5QkNqpQgfrn7Zo6yH9E/edit#gid=0'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.runQuery = this.runQuery.bind(this);

    }

    async runQuery(event) {

        event.preventDefault()

        const listId = this.state.listUrl.split('/')[5];
        const associationId = this.state.associationUrl.split('/')[5];

        console.log({listId})
        console.log({associationId})

        const query = gql`
        query ParseList($listId: String!, $associationId: String!) 
    {
    generateJson(
        spreadsheetId: $listId,
        associationId: $associationId)
    }
  `

        let test = await this.props.client.query({
            query,
            variables: { listId,
            associationId}
        });

        this.props.callback(test.data.generateJson)

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state.data);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.runQuery}>
                <label>
                    List Url:
                    <input
                        name="listUrl"
                        type="url"
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Association Url:
                    <input
                        name="associationUrl"
                        type="url"
                        value={this.state.associationUrl}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ParseForm = withApollo(ParseForm);


// Posts requires props with a data attribute of an array of posts
// Parse.propTypes = {
//     data: PropTypes.shape({
//         getUsers: PropTypes.array
//     }).isRequired
// };

// Define the graphql query to retrieve the posts and the desired attributes
// const allUsers = gql`
//   query ParsedList {
//     {
//     generateJson(spreadsheetId:"1g2kvk623GlUdwcuENt_9b8jne-9WFO7mWjnp77fa9wA",
//         associationId:"1RYkMLABtWgEq0n1_Xyf3RPin5QkNqpQgfrn7Zo6yH9E")
// }
//   }
// `;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
