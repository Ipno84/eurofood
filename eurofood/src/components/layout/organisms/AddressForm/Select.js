import { FlatList, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bar from './../../atoms/Bar';
import BarText from './../../atoms/Bar/BarText';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './../../atoms/Icon/IconWrapper';
import SelectButtonText from './../../atoms/Text/SelectButtonText';
import SelectButtonWrapper from './../../atoms/Wrapper/SelectButtonWrapper';
import SelectItem from './../../atoms/Item/SelectItem';
import Separator from './../../atoms/Spacer/Separator';
import Touchable from './../../atoms/Button/Touchable';
import { dark } from './../../../../constants/ThemeConstants';
import getAddressFormKeySelector from './../../../../state/selectors/AddressesSelectors/addressForm/getAddressFormKeySelector';
import setAddressFormKeyAction from './../../../../state/actions/AddressesActions/setAddressFormKeyAction';

const Select = ({
    options,
    formatOptions,
    formKey,
    errorKey,
    placeholder,
    scrollRef
}) => {
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
                            : placeholder}
                    </SelectButtonText>
                    <IconWrapper light={true}>
                        <Icon
                            size={28}
                            name="menu-down"
                            color={dark.toString()}
                        />
                    </IconWrapper>
                </SelectButtonWrapper>
            </Touchable>
            <ErrorMessage scrollRef={scrollRef} errorKey={errorKey} />
            <Modal
                animationType="slide"
                visible={selectModalOpen}
                onRequestClose={() => setSelectModalOpen(false)}>
                <Bar>
                    <BarText>{placeholder}</BarText>
                </Bar>
                <FlatList
                    data={formatOptions(options)}
                    renderItem={({ item }) => (
                        <SelectItem
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
