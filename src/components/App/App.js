import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import "./app.style.scss";
export default class App extends Component {
  render() {
    return (
      <div className="phones-app">
        <BrowserRouter>
          <Header />
          <Switch></Switch>
        </BrowserRouter>
      </div>
    );
  }
}
