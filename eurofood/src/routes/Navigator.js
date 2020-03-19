import {
    ROUTE_NAME_CART,
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_HOME,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_OFFER,
    ROUTE_NAME_PRODUCT,
    ROUTE_NAME_PROMO,
    ROUTE_NAME_RECIPE,
    ROUTE_NAME_REGISTER,
} from './../constants/RouteConstants';

import Cart from './../components/layout/pages/Cart';
import Category from './../components/layout/pages/Category';
import Drawer from './Drawer';
import DrawerContent from './../components/layout/templates/DrawerContent';
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
        options: ({ navigation, route }) => ({
            title: 'Home',
            headerTitleAlign: 'center',
            headerTitle: props => <Logo {...props} />,
            headerLeft: () => (
                <HeaderButton
                    isLeft={true}
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                />
            ),
            headerRight: () => {
                return (
                    <HeaderButton
                        isLeft={false}
                        onPress={() => navigation.navigate(ROUTE_NAME_CART)}
                        name="shopping-cart"
                    />
                );
            },
        }),
    },
    {
        name: ROUTE_NAME_LOGIN,
        component: Login,
        options: ({ navigation, route }) => ({
            title: 'Login',
        }),
    },
    {
        name: ROUTE_NAME_REGISTER,
        component: Register,
        options: ({ navigation, route }) => ({
            title: 'Register',
        }),
    },
    {
        name: ROUTE_NAME_CATEGORY,
        component: Category,
        options: ({ navigation, route }) => ({
            title: 'Category',
        }),
    },
    {
        name: ROUTE_NAME_PRODUCT,
        component: Product,
        options: ({ navigation, route }) => ({
            title: 'Product',
        }),
    },
    {
        name: ROUTE_NAME_PROMO,
        component: Promo,
        options: ({ navigation, route }) => ({
            title: 'Promo',
        }),
    },
    {
        name: ROUTE_NAME_OFFER,
        component: Offer,
        options: ({ navigation, route }) => ({
            title: 'Offer',
        }),
    },
    {
        name: ROUTE_NAME_RECIPE,
        component: Recipe,
        options: ({ navigation, route }) => ({
            title: 'Recipe',
        }),
    },
    {
        name: ROUTE_NAME_CART,
        component: Cart,
        options: ({ navigation, route }) => ({
            title: 'Cart',
        }),
    },
];

const StackNavigator = () => {
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
                    options={props => options(props)}
                />
            ))}
        </Stack.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Stack"
            drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Stack" component={StackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
