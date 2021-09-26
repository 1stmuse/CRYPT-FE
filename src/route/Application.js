import React from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../views/dashboard";
import Transaction from "../views/Transactions";
import Trade from "../views/Trade";
import Borrow from "../views/borrow";
import Layout from "../components/layout";

const Application = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/transactions" exact component={Transaction} />
        <Route path="/trade" exact component={Trade} />
        <Route path="/borrow" exact component={Borrow} />
      </Switch>
    </Layout>
  );
};

export default Application;
