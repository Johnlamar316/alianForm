import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AlianForm from "../component/AlianForm ";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={AlianForm} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
