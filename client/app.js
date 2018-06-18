import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './util/privateRoute';
import { Header } from './components';
import withRoot from './withRoot';
import { Home, Login, Details, Cart, Orders, SignUp } from './scenes';
import UploadForm from './components/uploadForm';
import PaymentForm from './components/PaymentForm';


// For testing cart scene
let id = 0;
function createData(product, price, quantity ) {
    id += 1;
    return { id, product, price, quantity };
}
// For testing orders scene
let id2=0;
function createOrders(username,date,status,total) {
    id2+=1;
    return { order:id2, username, date, status, total}
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
    createData('Coca cola', 356, 312),
];
const data2 = [
    createOrders('jean', '25/4/2018', 'finish', 405),
    createOrders('clarence', '25/4/2018', 'finish', 45),
    createOrders('lambert', '25/4/2018', 'pending', 315),
    createOrders('rios', '25/4/2018', 'in', 952),
    createOrders('jean', '25/4/2018', 'finish', 405),
    createOrders('clarence', '25/4/2018', 'finish', 45),
    createOrders('lambert', '25/4/2018', 'pending', 315),
    createOrders('rios', '25/4/2018', 'in', 952),
    createOrders('jean', '25/4/2018', 'finish', 405),
    createOrders('clarence', '25/4/2018', 'finish', 45),
    createOrders('lambert', '25/4/2018', 'pending', 315),
    createOrders('rios', '25/4/2018', 'in', 952),
    createOrders('jean', '25/4/2018', 'finish', 405),
    createOrders('clarence', '25/4/2018', 'finish', 45),
    createOrders('lambert', '25/4/2018', 'pending', 315),
    createOrders('rios', '25/4/2018', 'in', 952),
];
function OrdersTest() {
    return <Orders orders={data2} />
}


class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route path="/details" component={Details} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/orders" component={OrdersTest} />
                <Route exact path="/product/new" component={UploadForm} />
                <Route path="/pay" component={PaymentForm} />
                {/* <PrivateRoute path="/accout" component={} /> */}
            </Switch>
        </div>
        )
    }
}

export default withRoot(App);
