import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { loadUser } from "./store/actions/authActions";
import setAuthToken from "./utills/setAuthToken";
import Dashboard from "./containers/Dashboard/Dashboard";
import Logout from "./containers/Auth/Logout/Logout";

const App = ({ loadUser }) => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      loadUser();
    }
  }, []);
  return (
    <BrowserRouter basename="/">
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default connect(
  null,
  { loadUser }
)(App);
