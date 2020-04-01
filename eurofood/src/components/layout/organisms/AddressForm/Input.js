import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import getAddressFormKeySelector from './../../../../state/selectors/AddressesSelectors/addressForm/getAddressFormKeySelector';
import setAddressFormKeyAction from './../../../../state/actions/AddressesActions/setAddressFormKeyAction';

const Input = ({ placeholder, formKey, errorKey, ...rest }) => {
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
            <CardInput
                value={value}
                placeholder={placeholder}
                onChange={e => setAddressFormKey(e.nativeEvent.text)}
                {...rest}
            />
            <ErrorMessage errorKey={errorKey} />
        </>
    );
};

export default Input;
