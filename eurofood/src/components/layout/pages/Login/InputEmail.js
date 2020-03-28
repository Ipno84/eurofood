import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { LOGIN_EMAIL_ERROR } from './../../../../constants/ErrorsConstants';
import getLoginEmailSelector from './../../../../state/selectors/ClientSelectors/getLoginEmailSelector';
import setLoginEmailAction from './../../../../state/actions/ClientActions/setLoginEmailAction';

const InputEmail = () => {
    const dispatch = useDispatch();
    const setLoginEmail = useCallback(
        email => dispatch(setLoginEmailAction(email)),
        [dispatch]
    );
    const email = useSelector(state => getLoginEmailSelector(state));
    return (
        <>
            <CardInput
                value={email}
                placeholder="Email"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChange={e => setLoginEmail(e.nativeEvent.text)}
            />
            <ErrorMessage errorKey={LOGIN_EMAIL_ERROR} />
        </>
    );
};

export default InputEmail;
