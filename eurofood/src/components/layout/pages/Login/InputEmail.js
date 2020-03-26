import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginInput from './../../atoms/Input/LoginInput';
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
        <LoginInput
            value={email}
            placeholder="Email"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChange={e => setLoginEmail(e.nativeEvent.text)}
            onSubmitEditing={submitLogin}
        />
    );
};

export default InputEmail;
