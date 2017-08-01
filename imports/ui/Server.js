import React, { Component } from 'react';

export default class Server extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Server</h3>
                <div><h3>{this.props.data.name}</h3></div>
                <div>{this.props.data.status}</div>
                <div>{this.props.data.ips[0]}</div>
            </div>
        )
    }
}


