import {
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_REGISTER
} from '../../../../constants/RouteConstants';

import ButtonWrapper from '../../atoms/Wrapper/ButtonWrapper';
import FlatButton from '../../atoms/Button/FlatButton';
import InnerTitle from '../../atoms/Text/InnerTitle';
import PlainButton from '../../atoms/Button/PlainButton';
import React from 'react';
import Styled from './styled';
import isUserLoggedInSelector from '../../../../state/selectors/ClientSelectors/isUserLoggedInSelector';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import { useSelector } from 'react-redux';

const LoginBlock = () => {
    const isUserLoggedIn = useSelector(state => isUserLoggedInSelector(state));
    const { navigate } = useAppNavigation();
    if (isUserLoggedIn) return null;
    return (
        <Styled>
            <InnerTitle>Accedi per un’esperienza migliore</InnerTitle>
            <ButtonWrapper>
                <PlainButton onPress={() => navigate(ROUTE_NAME_LOGIN)}>
                    Accedi
                </PlainButton>
            </ButtonWrapper>
            <FlatButton
                onPress={() => navigate(ROUTE_NAME_REGISTER)}
                azure={true}>
                Crea un account
            </FlatButton>
        </Styled>
    );
};

export default LoginBlock;
