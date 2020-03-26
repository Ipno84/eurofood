import React, { useCallback } from 'react';

import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import PlainButton from './../../atoms/Button/PlainButton';
import Spacer from './../../atoms/Spacer';
import submitLoginAction from './../../../../state/actions/ClientActions/submitLoginAction';
import { useDispatch } from 'react-redux';

const ButtonSubmit = () => {
    const dispatch = useDispatch();
    const submitLogin = useCallback(() => dispatch(submitLoginAction()), [
        dispatch
    ]);
    return (
        <ButtonWrapper>
            <PlainButton onPress={submitLogin}>Accedi</PlainButton>
            <Spacer top={16} />
        </ButtonWrapper>
    );
};

export default ButtonSubmit;
