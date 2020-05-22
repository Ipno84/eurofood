import { Modal, SafeAreaView, ScrollView, View } from 'react-native';

import Bar from './Bar';
import BusinessRegistrationFields from './BusinessRegistrationFields';
import ButtonSubmit from './ButtonSubmit';
import Container from './../../atoms/Container';
import ListHeaderText from '../../atoms/Text/ListHeaderText';
import LogoImage from './../../atoms/Logo/LogoImage';
import React from 'react';
import Spacer from './../../atoms/Spacer';
import Wrapper from './../../atoms/Card/Wrapper';
import getHasToCompleteBusinessRegistrationSelector from './../../../../state/selectors/ClientSelectors/getHasToCompleteBusinessRegistrationSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const ModalRegisterBusiness = () => {
    const hasToCompleteBusinessRegistration = useSelector(state =>
        getHasToCompleteBusinessRegistrationSelector(state)
    );
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={hasToCompleteBusinessRegistration}>
            <SafeAreaView>
                <ContentContainer>
                    <Bar>
                        <LogoImage />
                    </Bar>
                    <ScrollView style={{ flex: 1 }}>
                        <Container>
                            <Wrapper>
                                <Spacer top={16} />
                                <ListHeaderText center={true}>
                                    Indirizzo di fatturazione
                                </ListHeaderText>
                                <Container>
                                    <Text>
                                        Inserisci il tuo indirizzo di
                                        fatturazione. Ricorda che il tuo account
                                        non sará abilitato e non potrai
                                        proseguire nella navigazione fino quando
                                        non completerai il form sottostante
                                    </Text>
                                </Container>
                                <BusinessRegistrationFields />
                                <Spacer top={16} />
                                <ButtonSubmit />
                            </Wrapper>
                        </Container>
                    </ScrollView>
                </ContentContainer>
            </SafeAreaView>
        </Modal>
    );
};

const Text = styled.Text``;

const ContentContainer = styled.View`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
`;

export default ModalRegisterBusiness;
