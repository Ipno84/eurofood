import {
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_HOME,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_OFFER,
    ROUTE_NAME_PRODUCT,
    ROUTE_NAME_PROMO,
    ROUTE_NAME_RECIPE,
    ROUTE_NAME_REGISTER,
} from './../constants/RouteConstants';

import Category from './../components/layout/pages/Category';
import HeaderButton from './../components/layout/atoms/HeaderButton';
import Home from './../components/layout/pages/Home';
import Login from './../components/layout/pages/Login';
import Logo from './../components/layout/atoms/Logo';
import Offer from './../components/layout/pages/Offer';
import Product from './../components/layout/pages/Product';
import Promo from './../components/layout/pages/Promo';
import React from 'react';
import Recipe from './../components/layout/pages/Recipe';
import Register from './../components/layout/pages/Register';
import Stack from './Stack';
import { lightGray } from './../constants/ThemeConstants';

const RoutesMap = [
    {
        name: ROUTE_NAME_HOME,
        component: Home,
        options: {
            title: 'Home',
            headerTitleAlign: 'center',
            headerTitle: props => <Logo {...props} />,
            headerLeft: () => (
                <HeaderButton
                    isLeft={true}
                    onPress={() => alert('Menu button!')}
                    name="menu"
                />
            ),
            headerRight: () => (
                <HeaderButton
                    isLeft={false}
                    onPress={() => alert('Cart button!')}
                    name="shopping-cart"
                />
            ),
        },
    },
    {
        name: ROUTE_NAME_LOGIN,
        component: Login,
        options: {
            title: 'Login',
        },
    },
    {
        name: ROUTE_NAME_REGISTER,
        component: Register,
        options: {
            title: 'Register',
        },
    },
    {
        name: ROUTE_NAME_CATEGORY,
        component: Category,
        options: {
            title: 'Category',
        },
    },
    {
        name: ROUTE_NAME_PRODUCT,
        component: Product,
        options: {
            title: 'Product',
        },
    },
    {
        name: ROUTE_NAME_PROMO,
        component: Promo,
        options: {
            title: 'Promo',
        },
    },
    {
        name: ROUTE_NAME_OFFER,
        component: Offer,
        options: {
            title: 'Offer',
        },
    },
    {
        name: ROUTE_NAME_RECIPE,
        component: Recipe,
        options: {
            title: 'Recipe',
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
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
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
