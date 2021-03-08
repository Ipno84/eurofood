import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, SectionList, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import AddressItem from './../../atoms/Item/AddressItem';
import Container from './../../atoms/Container';
import SectionTitle from './../../atoms/Text/SectionTitle';
import Spacer from './../../atoms/Spacer';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import getAddressesSelector from '../../../../state/selectors/AddressesSelectors/getAddressesSelector';
import getCurrentUserAddressAction from '../../../../state/actions/AddressesActions/getCurrentUserAddressAction';
import getUserSelector from '../../../../state/selectors/ClientSelectors/getUserSelector';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => getUserSelector(state));
    const getCurrentUserAddress = useCallback(
        () => dispatch(getCurrentUserAddressAction()),
        [dispatch]
    );
    useEffect(() => {
        getCurrentUserAddress();
    }, [getCurrentUserAddress]);
    const addresses = useSelector(state => getAddressesSelector(state));
    const sections = [
        { title: 'Dati personali', type: 'userData', data: [1] },
        { title: 'Indirizzi', type: 'addresses', data: addresses }
    ];

    const ListHeaderComponent = useCallback(() => {
        return (
            <TitleWrapper>
                <Spacer top={8} />
                <SectionTitle bigger={true}>Profilo</SectionTitle>
                <Spacer top={16} />
            </TitleWrapper>
        );
    }, []);

    const renderItem = useCallback(
        ({ item, section, index }) => {
            if (section.type === 'addresses') {
                return (
                    <>
                        {index === 0 ? <Spacer top={10} /> : null}
                        <AddressItem item={item} />
                    </>
                );
            } else if (section.type === 'userData') {
                return (
                    <Container>
                        <Text>
                            <Text bold={true}>Nome</Text>
                            <Text>: {user.firstname}</Text>
                        </Text>
                        <Text>
                            <Text bold={true}>Cognome</Text>
                            <Text>: {user.lastname}</Text>
                        </Text>
                        <Text>
                            <Text bold={true}>Email</Text>
                            <Text>: {user.email}</Text>
                        </Text>
                    </Container>
                );
            }
            return null;
        },
        [user]
    );

    const renderSectionHeader = useCallback(
        ({ section: { title } }) => (
            <SectionWrapper>
                <SectionText>{title}</SectionText>
            </SectionWrapper>
        ),
        []
    );

    return (
        <SafeAreaView>
            <SectionList
                sections={sections}
                stickySectionHeadersEnabled={true}
                ListHeaderComponent={ListHeaderComponent}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </SafeAreaView>
    );
};

export default Profile;

const SectionWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.lightGray(1, 0.1)};
    padding-top: 12px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.alterGray(0.6)};
`;
const SectionText = styled.Text`
    font-size: 16px;
    line-height: 16px;
`;

const Text = styled.Text`
    font-size: 16px;
    line-height: 20px;
    ${({ bold }) =>
        bold
            ? css`
                  font-family: ${({ theme }) =>
                      theme.fonts.roboto(700, false, true)};
              `
            : css`
                  font-family: ${({ theme }) =>
                      theme.fonts.roboto(400, false, true)};
              `}
`;
