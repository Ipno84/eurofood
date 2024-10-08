import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_ADDRESS_ERROR } from './../../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterBusinessTypeDataAddressSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataAddressSelector';
import setRegisterAddressAction from './../../../../../state/actions/ClientActions/setRegisterAddressAction';

const InputAddress = () => {
    const dispatch = useDispatch();
    const setRegisterAddress = useCallback(
        text => dispatch(setRegisterAddressAction(text)),
        [dispatch]
    );
    const address = useSelector(state =>
        getRegisterBusinessTypeDataAddressSelector(state)
    );
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={{ width: '100%' }}>
                <CardInput
                    onChange={e => setRegisterAddress(e.nativeEvent.text)}
                    value={address}
                    placeholder="Indirizzo"
                    formKey="address"
                    autoCompleteType="street-address"
                    textContentType="streetAddressLine1"
                />
                <ErrorMessage errorKey={REGISTER_ADDRESS_ERROR} />
            </View>
        </View>
    );
};

export default InputAddress;
