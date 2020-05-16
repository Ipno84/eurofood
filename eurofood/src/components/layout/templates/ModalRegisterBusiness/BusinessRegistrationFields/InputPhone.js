import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_PHONE_ERROR } from './../../../../../constants/ErrorsConstants';
import getRegisterBusinessTypeDataPhoneSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataPhoneSelector';
import setRegisterPhoneAction from './../../../../../state/actions/ClientActions/setRegisterPhoneAction';

const InputPhone = () => {
    const dispatch = useDispatch();
    const setRegisterPhone = useCallback(
        text => dispatch(setRegisterPhoneAction(text)),
        [dispatch]
    );
    const phone = useSelector(state =>
        getRegisterBusinessTypeDataPhoneSelector(state)
    );
    return (
        <>
            <CardInput
                onChange={e => setRegisterPhone(e.nativeEvent.text)}
                value={phone}
                placeholder="Telefono"
                formKey="phone"
                textContentType="telephoneNumber"
                autoCompleteType="tel"
                keyboardType="phone-pad"
            />
            <ErrorMessage errorKey={REGISTER_PHONE_ERROR} />
        </>
    );
};

export default InputPhone;
