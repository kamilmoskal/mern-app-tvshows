import React from "react";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route path="/" exact component={Auth} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
