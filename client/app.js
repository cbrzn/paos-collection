import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import PrivateRoute from './util/privateRoute';
import { Header } from './components';
import withRoot from './withRoot';
import { Home, Login, Details, Cart } from './scenes';


// For testing cart scene
let id = 0;
function createData(product, price, quantity ) {
  id += 1;
  return { id, product, price, quantity, total: 0 };
}

const data = [
  createData('Frozen yoghurt', 45, 4),
  createData('Ice cream sandwich', 237, 3),
  createData('Eclair', 262, 12),
  createData('Cupcake', 305, 5),
  createData('Gingerbread', 356, 312),
  createData('Frozen yoghurt', 45, 4),
  createData('Ice cream sandwich', 237, 3),
  createData('Eclair', 262, 12),
  createData('Cupcake', 305, 5),
  createData('Gingerbread', 356, 312),
  createData('Frozen yoghurt', 45, 4),
  createData('Ice cream sandwich', 237, 3),
  createData('Eclair', 262, 12),
  createData('Cupcake', 305, 5),
  createData('Gingerbread', 356, 312),
];
function CartTest() {

    return (
        <Cart items={data} />
    )
}

class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/details" component={Details} />
                <Route exact path="/cart" component={CartTest} />
                {/* <PrivateRoute path="/accout" component={} /> */}
            </Switch>
        </div>
        );
    }
}

export default withRoot(App);
