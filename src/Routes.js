import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./Pages/Home";
import TraderProfile from "./Pages/TraderProfile";

export const Routes = withRouter(({history}) => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/trader" component={TraderProfile}/>
        </Switch>
    )
});