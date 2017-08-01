import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import App from './App';
import UsersContainer from './Users'
import Parse from './Parse'
import Servers from './Servers'

const browserHistory = createBrowserHistory();


export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/parse">Parse</Link></li>
                        <li><Link to="/servers">Servers</Link></li>
                        <li><Link to="/parse">Read</Link></li>
                    </ul>

                    <hr/>

                    <Switch>
                        <Route path="/" exact component={App}/>
                        <Route path="/users" exact component={UsersContainer}/>
                        <Route path="/parse" exact component={Parse}/>
                        <Route path="/servers" exact component={Servers}/>
                        <Route path="/read" exact component={Parse}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}