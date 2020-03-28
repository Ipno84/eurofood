import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { REGISTER_FIRSTNAME_ERROR } from './../../../../constants/ErrorsConstants';
import getRegisterFirstnameSelector from './../../../../state/selectors/ClientSelectors/getRegisterFirstnameSelector';
import setRegisterFirstnameAction from './../../../../state/actions/ClientActions/setRegisterFirstnameAction';

const InputFirstname = () => {
    const dispatch = useDispatch();
    const setRegisterFirstname = useCallback(
        text => dispatch(setRegisterFirstnameAction(text)),
        [dispatch]
    );
    const firstname = useSelector(state => getRegisterFirstnameSelector(state));
    return (
        <>
            <CardInput
                onChange={e => setRegisterFirstname(e.nativeEvent.text)}
                value={firstname}
                placeholder="Nome"
            />
            <ErrorMessage errorKey={REGISTER_FIRSTNAME_ERROR} />
        </>
    );
};

export default InputFirstname;
