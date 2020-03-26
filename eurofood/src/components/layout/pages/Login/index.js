import { SafeAreaView, ScrollView } from 'react-native';

import ButtonSubmit from './ButtonSubmit';
import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import Container from './../../atoms/Container';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import React from 'react';
import Spacer from './../../atoms/Spacer';
import Wrapper from './../../atoms/Card/Wrapper';

const Login = () => {
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
