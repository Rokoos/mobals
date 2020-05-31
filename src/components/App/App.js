import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import SinglePhone from "../SinglePhone/SinglePhone";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import NotFound from "../NotFound/NotFound";
import "./app.style.scss";
export default class App extends Component {
  render() {
    return (
      <div className="phones-app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/phone/:id" component={SinglePhone} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
