import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import MyOrders from "./containers/MyOrders/MyOrders";
import Authenticate from "./containers/Authentication/Authentication";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/authenticate" component={Authenticate} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/my-orders" component={MyOrders} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
