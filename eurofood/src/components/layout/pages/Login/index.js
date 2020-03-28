import { Linking, SafeAreaView, ScrollView } from 'react-native';
import {
    ROUTE_NAME_FORGOT_PASSWORD,
    ROUTE_NAME_REGISTER
} from '../../../../constants/RouteConstants';

import BottomWrapper from './BottomWrapper';
import ButtonSubmit from './ButtonSubmit';
import Container from './../../atoms/Container';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import React from 'react';
import Side from './Side';
import Spacer from './../../atoms/Spacer';
import Text from './Text';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Card/Wrapper';
import isUserLoggedInSelector from './../../../../state/selectors/ClientSelectors/isUserLoggedInSelector';
import usePushOrBack from '../../../../hooks/navigation/usePushOrBack';
import { useSelector } from 'react-redux';

const Login = () => {
    const go = usePushOrBack();
    const isUserLoggedIn = useSelector(state => isUserLoggedInSelector(state));
    return (
        <SafeAreaView>
            <ScrollView>
                {!isUserLoggedIn ? (
                    <>
                        <Container>
                            <Wrapper>
                                <Spacer top={16} />
                                <ListHeaderText center={true}>
                                    Login
                                </ListHeaderText>
                                <InputEmail />
                                <InputPassword />
                                <Spacer top={16} />
                                <ButtonSubmit />
                            </Wrapper>
                        </Container>
                        <BottomWrapper>
                            <Side>
                                <Touchable
                                    onPress={() => go(ROUTE_NAME_REGISTER)}>
                                    <Text>Registrati</Text>
                                </Touchable>
                            </Side>
                            <Side isRight={true}>
                                <Touchable
                                    onPress={() =>
                                        Linking.openURL(
                                            'https://www.eurofoodservice.it/recupero-password'
                                        )
                                    }>
                                    <Text>Recupera password</Text>
                                </Touchable>
                            </Side>
                        </BottomWrapper>
                    </>
                ) : (
                    <Container>
                        <Text>Accesso effettuato</Text>
                    </Container>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
