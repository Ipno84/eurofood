import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { REGISTER_EMAIL_ERROR } from './../../../../constants/ErrorsConstants';
import getRegisterEmailSelector from './../../../../state/selectors/ClientSelectors/getRegisterEmailSelector';
import setRegisterEmailAction from './../../../../state/actions/ClientActions/setRegisterEmailAction';

const InputEmail = () => {
    const dispatch = useDispatch();
    const setRegisterEmail = useCallback(
        text => dispatch(setRegisterEmailAction(text)),
        [dispatch]
    );
    const email = useSelector(state => getRegisterEmailSelector(state));
    return (
        <>
            <CardInput
                onChange={e => setRegisterEmail(e.nativeEvent.text)}
                value={email}
                placeholder="Email"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <ErrorMessage errorKey={REGISTER_EMAIL_ERROR} />
        </>
    );
};

export default InputEmail;
