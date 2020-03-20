import { Modal, SafeAreaView } from 'react-native';

import React from 'react';
import Touchable from './../../atoms/Button/Touchable';
import getMainSectionsSelector from '../../../../state/selectors/CategoriesSelectors/getMainSectionsSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const CategoriesModalSelector = ({ visibility, setVisibility }) => {
    const mainSections = useSelector(state => getMainSectionsSelector(state));
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibility}
            onRequestClose={() => setVisibility(false)}>
            <SafeAreaView>
                <ModalWrapper>
                    <List
                        contentContainerStyle={{
                            paddingBottom: 100
                        }}
                        data={mainSections}
                        renderItem={({ item }) => (
                            <Touchable onPress={() => alert(item.id)}>
                                <ItemText>{item.name}</ItemText>
                            </Touchable>
                        )}
                        keyExtractor={({ id }) => id}
                    />
                    <Touchable onPress={() => setVisibility(false)}>
                        <FixedBottom>
                            <ButtonText>×</ButtonText>
                        </FixedBottom>
                    </Touchable>
                </ModalWrapper>
            </SafeAreaView>
        </Modal>
    );
};

export default CategoriesModalSelector;

const ModalWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.black(0.8)};
    width: 100%;
    height: 100%;
`;

const List = styled.FlatList``;

const ItemText = styled.Text`
    color: ${({ theme }) => theme.colors.white(1)};
    font-size: 18px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(100, false, false)};
    padding: 16px;
`;

const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.black(1)};
    background-color: ${({ theme }) => theme.colors.white(1)};
    font-size: 32px;
    line-height: 56px;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    elevation: 6;
`;

const FixedBottom = styled.View`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    align-items: center;
`;
