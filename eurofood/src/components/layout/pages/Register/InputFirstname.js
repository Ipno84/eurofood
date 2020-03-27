import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
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
        <CardInput
            onChange={e => setRegisterFirstname(e.nativeEvent.text)}
            value={firstname}
            placeholder="Nome"
        />
    );
};

export default InputFirstname;
