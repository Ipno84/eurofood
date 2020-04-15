import {
    ROUTE_NAME_CATEGORIES,
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_HOME,
    ROUTE_NAME_ORDERS,
    ROUTE_NAME_PROFILE,
    ROUTE_NAME_SETTINGS
} from '../../../../constants/RouteConstants';

import Container from './Container';
import FlatList from './FlatList';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Separator from './Separator';
import isUserLoggedInSelector from './../../../../state/selectors/ClientSelectors/isUserLoggedInSelector';
import { useSelector } from 'react-redux';

const items = [
    {
        id: 'Home',
        label: 'Home',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_HOME);
        },
        onlyLogged: false
    },
    {
        id: 'superOffers',
        label: 'Super Offerte',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_CATEGORY, { id: 86 });
        },
        onlyLogged: false
    },
    {
        id: 'offers',
        label: 'Offerte',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_CATEGORY, { id: 51 });
        },
        onlyLogged: false
    },
    // {
    //     id: 'categories',
    //     label: 'Scegli per categoria',
    //     action: ({ navigate }) => {
    //         navigate(ROUTE_NAME_CATEGORIES);
    //     },
    //     onlyLogged: false
    // },
    {
        id: 'myOrders',
        label: 'I miei ordini',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_ORDERS);
        },
        onlyLogged: true
    },
    {
        id: 'myProfile',
        label: 'Il mio profilo',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_PROFILE);
        },
        onlyLogged: true
    },
    {
        id: 'settings',
        label: 'Impostazioni',
        onlyLogged: false,
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_SETTINGS);
        }
    }
];

const DrawerContent = ({ navigation }) => {
    const isUserLoggedIn = useSelector(state => isUserLoggedInSelector(state));
    return (
        <SafeAreaView>
            <Container>
                <Header />
                <FlatList
                    data={
                        !isUserLoggedIn
                            ? items.filter(e => !e.onlyLogged)
                            : items
                    }
                    renderItem={({ item }) => {
                        return (
                            <Item
                                navigation={navigation}
                                action={item.action}
                                label={item.label}
                            />
                        );
                    }}
                    keyExtractor={(item, index) =>
                        item && item.id ? String(item.id) : String(index)
                    }
                    ItemSeparatorComponent={() => <Separator />}
                />
                <Footer navigation={navigation} />
            </Container>
        </SafeAreaView>
    );
};

export default DrawerContent;
