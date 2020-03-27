import {
    ROUTE_NAME_FORGOT_PASSWORD,
    ROUTE_NAME_REGISTER
} from '../../../../constants/RouteConstants';
import { SafeAreaView, ScrollView } from 'react-native';

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
import usePushOrBack from '../../../../hooks/navigation/usePushOrBack';

const Login = () => {
    const go = usePushOrBack();
    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <Wrapper>
                        <Spacer top={16} />
                        <ListHeaderText center={true}>Login</ListHeaderText>
                        <Spacer top={32} />
                        <InputEmail />
                        <InputPassword />
                        <ButtonSubmit />
                    </Wrapper>
                </Container>
                <BottomWrapper>
                    <Side>
                        <Touchable onPress={() => go(ROUTE_NAME_REGISTER)}>
                            <Text>Registrati</Text>
                        </Touchable>
                    </Side>
                    <Side isRight={true}>
                        <Touchable
                            onPress={() => go(ROUTE_NAME_FORGOT_PASSWORD)}>
                            <Text>Recupera password</Text>
                        </Touchable>
                    </Side>
                </BottomWrapper>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
