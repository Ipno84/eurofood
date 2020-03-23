import {
    ROUTE_NAME_CATEGORIES,
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_HOME,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_ORDERS,
    ROUTE_NAME_PROFILE,
    ROUTE_NAME_SETTINGS
} from '../../../../constants/RouteConstants';

import React from 'react';
import { SafeAreaView } from 'react-native';
import Touchable from './../../atoms/Button/Touchable';
import styled from 'styled-components/native';

const items = [
    {
        id: 'Home',
        label: 'Home',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_HOME);
        },
        noGuest: false
    },
    {
        id: 'superOffers',
        label: 'Super Offerte',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_CATEGORY, { id: 86 });
        },
        noGuest: false
    },
    {
        id: 'offers',
        label: 'Offerte',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_CATEGORY, { id: 51 });
        },
        noGuest: false
    },
    {
        id: 'categories',
        label: 'Scegli per categoria',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_CATEGORIES);
        },
        noGuest: false
    },
    {
        id: 'myOrders',
        label: 'I miei ordini',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_ORDERS);
        },
        noGuest: true
    },
    {
        id: 'myProfile',
        label: 'Il mio profilo',
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_PROFILE);
        },
        noGuest: true
    },
    {
        id: 'settings',
        label: 'Impostazioni',
        noGuest: false,
        action: ({ navigate }) => {
            navigate(ROUTE_NAME_SETTINGS);
        }
    }
];

const DrawerContent = ({ navigation }) => {
    const isUserLoggedIn = false;
    const name = '';
    return (
        <SafeAreaView>
            <Container>
                <Header name={name} />
                <FlatList
                    data={items.filter(e => e.noGuest === isUserLoggedIn)}
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
                <Footer
                    navigation={navigation}
                    isUserLoggedIn={isUserLoggedIn}
                />
            </Container>
        </SafeAreaView>
    );
};

export default DrawerContent;

const Text = styled.Text`
    font-size: 18px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    padding: 16px;
`;

const FlatList = styled.FlatList`
    flex: 1;
    border-color: ${({ theme }) => theme.colors.alterGray(0.6)};
    border-width: 1px;
`;

const Container = styled.View`
    height: 100%;
`;

const Separator = styled.View`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.alterGray(0.3)};
    margin-left: 32px;
`;

const Bar = styled.View`
    height: 60px;
    justify-content: center;
`;

const Header = ({ name }) => {
    return (
        <Bar>
            <Text>Ciao {name ? name : 'ospite'}</Text>
        </Bar>
    );
};

const Footer = ({ isUserLoggedIn, navigation }) => {
    return (
        <Bar>
            <Touchable
                onPress={() => {
                    if (isUserLoggedIn) {
                        console.log('logout');
                    } else {
                        navigation.navigate(ROUTE_NAME_LOGIN);
                    }
                }}>
                <ItemText>{isUserLoggedIn ? 'Esci' : 'Accedi'}</ItemText>
            </Touchable>
        </Bar>
    );
};

const ItemText = styled(Text)`
    padding-left: 32px;
`;

const Item = ({ action, label, navigation }) => {
    return (
        <Touchable
            onPress={() =>
                action &&
                action({
                    navigate: navigation.navigate
                })
            }>
            <ItemText>{label}</ItemText>
        </Touchable>
    );
};
