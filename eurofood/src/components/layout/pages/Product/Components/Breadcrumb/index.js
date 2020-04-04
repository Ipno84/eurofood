import {
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_CATEGORY_PRODUCTS,
    ROUTE_NAME_HOME
} from './../../../../../../constants/RouteConstants';
import styled, { css } from 'styled-components/native';
import { useNavigationState, useRoute } from '@react-navigation/native';

import Item from './Item';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import usePushOrBack from './../../../../../../hooks/navigation/usePushOrBack';

const Breadcrumb = ({ id }) => {
    const pushOrBack = usePushOrBack();
    const route = useRoute();
    const navigationState = useNavigationState(state => state);
    const routes = navigationState.routes;
    const currentIndex = routes.findIndex(e => e.key === route.key);
    if (currentIndex < 1) return null;
    const prevRoute = routes[currentIndex - 1];
    if (
        prevRoute.name !== ROUTE_NAME_CATEGORY &&
        prevRoute.name !== ROUTE_NAME_CATEGORY_PRODUCTS
    )
        return null;
    return (
        <TextWrap>
            <TouchableWithoutFeedback
                onPress={() => pushOrBack(ROUTE_NAME_HOME)}>
                <Text orange={true}>Home</Text>
            </TouchableWithoutFeedback>
            <Text> > </Text>
            <Item prevRoute={prevRoute} />
        </TextWrap>
    );
};

export default Breadcrumb;

const TextWrap = styled.Text`
    margin-left: 16px;
    margin-right: 16px;
`;

const Text = styled.Text`
    ${({ orange, theme }) =>
        orange &&
        css`
            color: ${theme.colors.orange(1)};
        `}
`;
