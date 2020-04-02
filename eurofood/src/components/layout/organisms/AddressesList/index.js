import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressItem from './../../atoms/Item/AddressItem';
import { FlatList } from 'react-native';
import getAddressesSelector from './../../../../state/selectors/AddressesSelectors/getAddressesSelector';
import getCurrentUserAddressAction from './../../../../state/actions/AddressesActions/getCurrentUserAddressAction';

const AddressesList = ({ toggleButton, onPressAddress, selectedId }) => {
    const dispatch = useDispatch();
    const getCurrentUserAddress = useCallback(
        () => dispatch(getCurrentUserAddressAction()),
        [dispatch]
    );
    useEffect(() => {
        getCurrentUserAddress();
    }, [getCurrentUserAddress]);
    const addresses = useSelector(state => getAddressesSelector(state));
    return (
        <FlatList
            ListFooterComponent={() => toggleButton()}
            contentContainerStyle={{ paddingVertical: 8 }}
            data={addresses}
            renderItem={({ item }) => {
                if (!item) return null;
                return (
                    <AddressItem
                        item={item}
                        onPress={() => onPressAddress(item.id)}
                        isSelected={selectedId === item.id}
                    />
                );
            }}
            keyExtractor={(item, index) =>
                item && item.id ? String(item.id) : String(index)
            }
        />
    );
};

export default AddressesList;
