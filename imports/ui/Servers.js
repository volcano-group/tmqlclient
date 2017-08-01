import React, { Component } from 'react';
import ServersList from './ServersList'

export default class Servers extends Component {
    constructor(props) {
        super(props);
        this.state= {serversList: []}

        this.updateList = this.updateList.bind(this);

    }

    updateList() {
        console.log('update')

    }

    render() {
        return (
            // TODO launch server button and cors fix
            <ServersList/>
        )
    }
}