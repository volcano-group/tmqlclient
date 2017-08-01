import React, { Component } from 'react';
import ServersList from './ServersList'
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';


 class Servers extends Component {
    constructor(props) {
        super(props);
        this.state= {serversList: []}

        this.launchServer = this.launchServer.bind(this);

    }



     async launchServer(){

        const name = 'W16-FC008'


        let test =await this.props.mutate({

            variables: { name
                }
        });

        console.log({test})
    }

    render() {
        return (
            // TODO launch server button and cors fix
            <div>
            <ServersList/>
                <button onClick={this.launchServer}>Launch Server</button>
            </div>


                )
    }
}

const query = gql`
    mutation LaunchServer($name: String!)
    {
        createInstance(
        name: $name)
    }
`

export default Servers = graphql(query)(Servers)