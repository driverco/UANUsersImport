import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';
/*import Users from './components/Users';*/
import Page404 from './components/Page404';
import About from './components/About';
/*
<Route exact path="/users" component = {Users} />
<Route exact path="/" component = {Users} />
*/
const AppRoutes = () => 
<App>
    <Switch>
        <Route exact path="/" component = {About} />
        <Route exact path="/about" component = {About} />
        <Route component = {Page404} />
    </Switch>
</App>

export default AppRoutes;