import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginInput from './../../atoms/Input/LoginInput';
import getLoginPasswordSelector from './../../../../state/selectors/ClientSelectors/getLoginPasswordSelector';
import setLoginPasswordAction from './../../../../state/actions/ClientActions/setLoginPasswordAction';
import submitLoginAction from './../../../../state/actions/ClientActions/submitLoginAction';

const InputPassword = () => {
    const dispatch = useDispatch();
    const setLoginPassword = useCallback(
        password => dispatch(setLoginPasswordAction(password)),
        [dispatch]
    );
    const submitLogin = useCallback(() => dispatch(submitLoginAction()), [
        dispatch
    ]);
    const password = useSelector(state => getLoginPasswordSelector(state));
    return (
        <LoginInput
            value={password}
            placeholder="Password"
            autoCompleteType="password"
            onChange={e => setLoginPassword(e.nativeEvent.text)}
            onSubmitEditing={submitLogin}
        />
    );
};

export default InputPassword;
