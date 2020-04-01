import React, { useState } from 'react';

import AddressForm from './../../organisms/AddressForm';
import AddressesList from './../../organisms/AddressesList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlainButton from './../../atoms/Button/PlainButton';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Card/Wrapper';
import { orange } from './../../../../constants/ThemeConstants';
import styled from 'styled-components/native';

const ShippingAddress = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {showForm ? (
                <AddressForm
                    toggleButton={() => (
                        <WrapperButton>
                            <PlainButton onPress={() => setShowForm(!showForm)}>
                                Scegli indirizzo
                            </PlainButton>
                        </WrapperButton>
                    )}
                />
            ) : (
                <AddressesList
                    toggleButton={() => (
                        <WrapperButton>
                            <Touchable onPress={() => setShowForm(!showForm)}>
                                <NewAddressWrapper>
                                    <NewAddressText>
                                        Nuovo indirizzo
                                    </NewAddressText>
                                    <IconWrapper>
                                        <Icon
                                            size={20}
                                            name="plus-box-outline"
                                            color={orange.toString()}
                                        />
                                    </IconWrapper>
                                </NewAddressWrapper>
                            </Touchable>
                        </WrapperButton>
                    )}
                />
            )}
        </>
    );
};

export default ShippingAddress;

const WrapperButton = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`;

const NewAddressText = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    color: ${({ theme }) => theme.colors.orange(1)};
    flex: 1;
`;

const NewAddressWrapper = styled(Wrapper)`
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.View``;
