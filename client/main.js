import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import ApolloClient from 'apollo-client';
import { createMeteorNetworkInterface, meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import AppRouter from '/imports/ui/AppRouter'


const networkInterface = createMeteorNetworkInterface({
    uri: 'http://tmql.ozonecloud.net:33769/graphql',
    useMeteorAccounts: false,
});

const client = new ApolloClient(meteorClientConfig({networkInterface}));

Meteor.startup(() => {
    render(
        <ApolloProvider client={client}>
            <AppRouter/>
        </ApolloProvider>,
        document.getElementById('app')
    );
});
