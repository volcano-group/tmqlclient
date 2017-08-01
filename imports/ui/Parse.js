import React, { Component } from 'react';
import ParseForm from './ParseForm'

export default class Parse extends Component {
    constructor(props) {
        super(props);
        this.state= {json: 'Output will appear here'}

        this.printJson = this.printJson.bind(this);

    }

    printJson(json) {
        json = JSON.stringify(json, null, 2)
        this.setState({json})

    }

    render() {
        return (
            <div>
                <ParseForm callback={this.printJson}/>
                <br/>
                <pre>{this.state.json}</pre>

            </div>
                )
    }
}