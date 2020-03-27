import {
    ROUTE_NAME_FORGOT_PASSWORD,
    ROUTE_NAME_LOGIN
} from '../../../../constants/RouteConstants';
import { SafeAreaView, ScrollView } from 'react-native';

import BottomWrapper from './BottomWrapper';
import CheckboxGdpr from './CheckboxGdpr';
import CheckboxNewsletter from './CheckboxNewsletter';
import Container from './../../atoms/Container';
import Gender from './Gender';
import InputEmail from './InputEmail';
import InputFirstname from './InputFirstname';
import InputLastname from './InputLastname';
import InputPassword from './InputPassword';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import React from 'react';
import Side from './Side';
import Spacer from './../../atoms/Spacer';
import Text from './Text';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Card/Wrapper';
import usePushOrBack from '../../../../hooks/navigation/usePushOrBack';

const Register = () => {
    const go = usePushOrBack();
    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <Wrapper>
                        <Spacer top={16} />
                        <ListHeaderText center={true}>
                            Registrazione
                        </ListHeaderText>
                        <Spacer top={32} />
                        <Gender />
                        <InputFirstname />
                        <InputLastname />
                        <InputEmail />
                        <InputPassword />
                        <CheckboxNewsletter />
                        <CheckboxGdpr />
                    </Wrapper>
                </Container>
                <BottomWrapper>
                    <Side>
                        <Touchable onPress={() => go(ROUTE_NAME_LOGIN)}>
                            <Text>Accedi</Text>
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

export default Register;
