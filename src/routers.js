import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './page/main'
import Box from './page/box'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes;