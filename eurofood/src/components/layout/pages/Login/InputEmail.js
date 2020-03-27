import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { LOGIN_EMAIL_ERROR } from './../../../../constants/ErrorsConstants';
import getLoginEmailSelector from './../../../../state/selectors/ClientSelectors/getLoginEmailSelector';
import setLoginEmailAction from './../../../../state/actions/ClientActions/setLoginEmailAction';
import submitLoginAction from './../../../../state/actions/ClientActions/submitLoginAction';

const InputEmail = () => {
    const dispatch = useDispatch();
    const setLoginEmail = useCallback(
        email => dispatch(setLoginEmailAction(email)),
        [dispatch]
    );
    const submitLogin = useCallback(() => dispatch(submitLoginAction()), [
        dispatch
    ]);
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
                onSubmitEditing={submitLogin}
            />
            <ErrorMessage errorKey={LOGIN_EMAIL_ERROR} />
        </>
    );
};

export default InputEmail;
