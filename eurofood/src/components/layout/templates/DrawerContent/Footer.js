import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bar from './Bar';
import ItemText from './ItemText';
import { ROUTE_NAME_LOGIN } from '../../../../constants/RouteConstants';
import Touchable from './../../atoms/Button/Touchable';
import isUserLoggedInSelector from './../../../../state/selectors/ClientSelectors/isUserLoggedInSelector';
import logoutAction from './../../../../state/actions/ClientActions/logoutAction';

const Footer = ({ navigation }) => {
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector(state => isUserLoggedInSelector(state));
    const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);
    return (
        <Bar>
            <Touchable
                onPress={() => {
                    if (isUserLoggedIn) {
                        logout();
                    } else {
                        navigation.navigate(ROUTE_NAME_LOGIN);
                    }
                }}>
                <ItemText>{isUserLoggedIn ? 'Esci' : 'Accedi'}</ItemText>
            </Touchable>
        </Bar>
    );
};

export default Footer;
