import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import publicRoutes from './publicRoutes';

const AppRouter = () => {
    return (
        <Switch>
                {publicRoutes.map(route=>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                )}
                <Redirect to='/'/>
        </Switch>
    );
};

export default AppRouter;