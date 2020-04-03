import {
    ROUTE_NAME_BILLING_ADDRESS,
    ROUTE_NAME_CART,
    ROUTE_NAME_CATEGORIES,
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_CATEGORY_PRODUCTS,
    ROUTE_NAME_EDIT_ADDRESS,
    ROUTE_NAME_FORGOT_PASSWORD,
    ROUTE_NAME_HOME,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_OFFER,
    ROUTE_NAME_ORDER,
    ROUTE_NAME_ORDERS,
    ROUTE_NAME_PRODUCT,
    ROUTE_NAME_PROFILE,
    ROUTE_NAME_PROMO,
    ROUTE_NAME_RECIPE,
    ROUTE_NAME_REGISTER,
    ROUTE_NAME_SEARCH_RESULTS,
    ROUTE_NAME_SETTINGS,
    ROUTE_NAME_SHIPPING_ADDRESS,
    ROUTE_NAME_TEMPLATE
} from './../constants/RouteConstants';

import BackButton from './../components/layout/atoms/HeaderButton/BackButton';
import BillingAddress from './../components/layout/pages/BillingAddress';
import Cart from './../components/layout/pages/Cart';
import CartButton from './../components/layout/atoms/HeaderButton/CartButton';
import Categories from './../components/layout/pages/Categories';
import Category from './../components/layout/pages/Category';
import CategoryProducts from './../components/layout/pages/Category/Products';
import Drawer from './Drawer';
import DrawerContent from './../components/layout/templates/DrawerContent';
import EditAddress from '../components/layout/pages/EditAddress';
import ForgotPassword from './../components/layout/pages/ForgotPassword';
import Home from './../components/layout/pages/Home';
import Login from './../components/layout/pages/Login';
import Logo from './../components/layout/atoms/Logo';
import MenuButton from './../components/layout/atoms/HeaderButton/MenuButton';
import Offer from './../components/layout/pages/Offer';
import Order from './../components/layout/pages/Order';
import Orders from './../components/layout/pages/Orders';
import Product from './../components/layout/pages/Product';
import Profile from './../components/layout/pages/Profile';
import Promo from './../components/layout/pages/Promo';
import React from 'react';
import Recipe from './../components/layout/pages/Recipe';
import Register from './../components/layout/pages/Register';
import SearchResults from './../components/layout/pages/SearchResults';
import Settings from './../components/layout/pages/Settings';
import ShippingAddress from './../components/layout/pages/ShippingAddress';
import Stack from './Stack';
import Template from './../components/layout/pages/Template';
import { lightGray } from './../constants/ThemeConstants';

const RoutesMap = [
    {
        name: ROUTE_NAME_HOME,
        component: Home,
        options: ({ navigation, route }) => ({ title: 'Home' })
    },
    {
        name: ROUTE_NAME_LOGIN,
        component: Login,
        options: ({ navigation, route }) => ({ title: 'Login' })
    },
    {
        name: ROUTE_NAME_REGISTER,
        component: Register,
        options: ({ navigation, route }) => ({ title: 'Register' })
    },
    {
        name: ROUTE_NAME_FORGOT_PASSWORD,
        component: ForgotPassword,
        options: ({ navigation, route }) => ({ title: 'ForgotPassword' })
    },
    {
        name: ROUTE_NAME_CATEGORY,
        component: Category,
        options: ({ navigation, route }) => ({ title: 'Category' })
    },
    {
        name: ROUTE_NAME_CATEGORY_PRODUCTS,
        component: CategoryProducts,
        options: ({ navigation, route }) => ({ title: 'Category Products' })
    },
    {
        name: ROUTE_NAME_CATEGORIES,
        component: Categories,
        options: ({ navigation, route }) => ({ title: 'Categories' })
    },
    {
        name: ROUTE_NAME_PRODUCT,
        component: Product,
        options: ({ navigation, route }) => ({ title: 'Product' })
    },
    {
        name: ROUTE_NAME_PROMO,
        component: Promo,
        options: ({ navigation, route }) => ({ title: 'Promo' })
    },
    {
        name: ROUTE_NAME_OFFER,
        component: Offer,
        options: ({ navigation, route }) => ({ title: 'Offer' })
    },
    {
        name: ROUTE_NAME_RECIPE,
        component: Recipe,
        options: ({ navigation, route }) => ({ title: 'Recipe' })
    },
    {
        name: ROUTE_NAME_CART,
        component: Cart,
        options: ({ navigation, route }) => ({ title: 'Cart' })
    },
    {
        name: ROUTE_NAME_TEMPLATE,
        component: Template,
        options: ({ navigation, route }) => ({ title: 'Template' })
    },
    {
        name: ROUTE_NAME_SETTINGS,
        component: Settings,
        options: ({ navigation, route }) => ({ title: 'Settings' })
    },
    {
        name: ROUTE_NAME_PROFILE,
        component: Profile,
        options: ({ navigation, route }) => ({ title: 'Profile' })
    },
    {
        name: ROUTE_NAME_ORDERS,
        component: Orders,
        options: ({ navigation, route }) => ({ title: 'Orders' })
    },
    {
        name: ROUTE_NAME_ORDER,
        component: Order,
        options: ({ navigation, route }) => ({ title: 'Order' })
    },
    {
        name: ROUTE_NAME_SEARCH_RESULTS,
        component: SearchResults,
        options: ({ navigation, route }) => ({ title: 'SearchResults' })
    },
    {
        name: ROUTE_NAME_SHIPPING_ADDRESS,
        component: ShippingAddress,
        options: ({ navigation, route }) => ({ title: 'ShippingAddress' })
    },
    {
        name: ROUTE_NAME_BILLING_ADDRESS,
        component: BillingAddress,
        options: ({ navigation, route }) => ({ title: 'BillingAddress' })
    },
    {
        name: ROUTE_NAME_EDIT_ADDRESS,
        component: EditAddress,
        options: ({ navigation, route }) => ({ title: 'EditAddress' })
    }
];

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={ROUTE_NAME_HOME}
            screenOptions={({ route, navigation }) => ({
                headerTitle: props => <Logo {...props} />,
                headerTitleAlign: 'center',
                headerLeft: ({ canGoBack }) => {
                    if (canGoBack) return <BackButton />;
                    return <MenuButton />;
                },
                headerRight: () => {
                    return <CartButton />;
                },
                headerStyle: {
                    backgroundColor: lightGray.toString(),
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0
                    },
                    elevation: 0
                }
            })}>
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
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Stack" component={StackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
