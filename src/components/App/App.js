import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/Header";
import SinglePhone from "../SinglePhone/SinglePhone";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import NotFound from "../NotFound/NotFound";
import { auth, createUserProfile } from "../../firebase/firebase";
import { setCurrentUser } from "../../actions";
import "./app.style.scss";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
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

export default connect(null, { setCurrentUser })(App);
