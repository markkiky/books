import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ClientTypeDetail } from '../components/clientTypeDetail';
import { PAGES } from './routes';

export const MainRouter = () => (
    <Switch>
        {PAGES.map((page) => (
            <Route key={`route_${page.route}`} exact path={`${page.route}`} component={page.component} />
        ))}

        <Route path={"/client_types/:client_type_id"} component={ClientTypeDetail}>

        </Route>
        <Route path={'*'}>
            <Redirect to={'/'} />
        </Route>
    </Switch>
);
