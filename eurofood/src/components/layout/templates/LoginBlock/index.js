import {
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_REGISTER,
} from '../../../../constants/RouteConstants';

import ButtonWrapper from '../../atoms/Wrapper/ButtonWrapper';
import FlatButton from '../../atoms/Button/FlatButton';
import InnerTitle from '../../atoms/Text/InnerTitle';
import PlainButton from '../../atoms/Button/PlainButton';
import React from 'react';
import Styled from './styled';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const LoginBlock = () => {
    const { navigate } = useAppNavigation();
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
