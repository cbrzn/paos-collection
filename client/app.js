import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import PrivateRoute from './util/privateRoute';
import { Header } from './components';
import withRoot from './withRoot';
import { Home, Login, Details } from './scenes';

class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/details" component={Details} />
                {/* <PrivateRoute path="/accout" component={} /> */}
            </Switch>
        </div>
        );
    }
}

export default withRoot(App);
