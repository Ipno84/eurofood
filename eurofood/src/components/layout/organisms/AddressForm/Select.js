import { FlatList, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from './../../atoms/Text/ErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from './../../atoms/Button/Touchable';
import { dark } from './../../../../constants/ThemeConstants';
import getAddressFormKeySelector from './../../../../state/selectors/AddressesSelectors/addressForm/getAddressFormKeySelector';
import setAddressFormKeyAction from './../../../../state/actions/AddressesActions/setAddressFormKeyAction';

const Select = ({ options, formatOptions, formKey, errorKey, headerText }) => {
    const [selectModalOpen, setSelectModalOpen] = useState(false);
    const dispatch = useDispatch();
    const setAddressFormKey = useCallback(
        value => dispatch(setAddressFormKeyAction(formKey, value)),
        [dispatch]
    );
    const value = useSelector(state =>
        getAddressFormKeySelector(state, formKey)
    );
    return (
        <>
            <Touchable onPress={() => setSelectModalOpen(true)}>
                <SelectButtonWrapper>
                    <SelectButtonText isSelected={value}>
                        {value && options && options[value]
                            ? options[value]
                            : 'Placeholder'}
                    </SelectButtonText>
                    <IconWrapper>
                        <Icon
                            size={28}
                            name="menu-down"
                            color={dark.toString()}
                        />
                    </IconWrapper>
                </SelectButtonWrapper>
            </Touchable>
            <ErrorMessage errorKey={errorKey} />
            <Modal
                animationType="slide"
                visible={selectModalOpen}
                onRequestClose={() => setSelectModalOpen(false)}>
                <Bar>
                    <BarText>{headerText}</BarText>
                </Bar>
                <FlatList
                    data={formatOptions(options)}
                    renderItem={({ item }) => (
                        <Item
                            id={item}
                            options={options}
                            onPress={() => {
                                setAddressFormKey(item);
                                setSelectModalOpen(false);
                            }}
                            isSelected={value === item}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={() => <Separator />}
                />
            </Modal>
        </>
    );
};

export default Select;

const SelectButtonWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    border-width: 1px;
    padding-top: 12px;
    padding-bottom: 9px;
    padding-left: 6px;
    padding-right: 6px;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    margin-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
    flex: 1;
    flex-direction: row;
    position: relative;
    z-index: 1;
`;
const SelectButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.dark(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 16px;
    line-height: 16px;
    flex: 1;
    ${({ isSelected }) =>
        isSelected
            ? css`
                  color: ${({ theme }) => theme.colors.dark(1)};
              `
            : css`
                  color: ${({ theme }) => theme.colors.dark(0.5)};
              `}
`;

const IconWrapper = styled.View`
    height: 20px;
    align-items: center;
    justify-content: center;
`;

const Item = ({ id, options, onPress, isSelected }) => {
    return (
        <Touchable onPress={onPress}>
            <ItemWrapper>
                <ItemText>{options[id]}</ItemText>
                {isSelected ? (
                    <IconWrapper>
                        <Icon size={24} name="check" color={dark.toString()} />
                    </IconWrapper>
                ) : null}
            </ItemWrapper>
        </Touchable>
    );
};

const ItemWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.white(1)};
    padding: 16px;
    flex-direction: row;
`;

const ItemText = styled.Text`
    color: ${({ theme }) => theme.colors.dark(1)};
    font-size: 18px;
    flex: 1;
`;

const Separator = styled.View`
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    height: 1px;
`;

const Bar = styled.View`
    height: 50px;
    justify-content: center;
    align-items: center;
`;

const BarText = styled.Text`
    font-size: 18px;
`;
