import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { REGISTER_LASTNAME_ERROR } from './../../../../constants/ErrorsConstants';
import getRegisterLastnameSelector from './../../../../state/selectors/ClientSelectors/getRegisterLastnameSelector';
import setRegisterLastnameAction from './../../../../state/actions/ClientActions/setRegisterLastnameAction';
import submitRegisterAction from './../../../../state/actions/ClientActions/submitRegisterAction';

const InputLastname = () => {
    const dispatch = useDispatch();
    const setRegisterLastname = useCallback(
        text => dispatch(setRegisterLastnameAction(text)),
        [dispatch]
    );
    const submitRegister = useCallback(() => dispatch(submitRegisterAction()), [
        dispatch
    ]);
    const lastname = useSelector(state => getRegisterLastnameSelector(state));
    return (
        <>
            <CardInput
                onChange={e => setRegisterLastname(e.nativeEvent.text)}
                value={lastname}
                placeholder="Cognome"
                onSubmitEditing={submitRegister}
            />
            <ErrorMessage errorKey={REGISTER_LASTNAME_ERROR} />
        </>
    );
};

export default InputLastname;
