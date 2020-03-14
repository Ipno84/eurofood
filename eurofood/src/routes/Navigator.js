import {
    ROUTE_NAME_HOME,
    ROUTE_NAME_LOGIN,
} from './../constants/RouteConstants';

import Home from './../components/layout/pages/Home';
import Login from './../components/layout/pages/Login';
import Logo from './../components/layout/atoms/Logo';
import React from 'react';
import Stack from './Stack';
import { lightGray } from './../constants/ThemeConstants';

const RoutesMap = [
    {
        name: ROUTE_NAME_HOME,
        component: Home,
        options: {
            title: 'Home',
            headerTitle: props => <Logo {...props} />,
        },
    },
    ,
    {
        name: ROUTE_NAME_LOGIN,
        component: Login,
        options: {
            title: 'Login',
        },
    },
];

const Routes = () => {
    return (
        <Stack.Navigator
            initialRouteName={ROUTE_NAME_HOME}
            screenOptions={{
                headerStyle: {
                    backgroundColor: lightGray.toString(),
                },
            }}>
            {RoutesMap.map(({ name, component, options }, i) => (
                <Stack.Screen
                    key={`route-${name}-${i}`}
                    name={name}
                    component={component}
                    options={options}
                />
            ))}
        </Stack.Navigator>
    );
};

export default Routes;
