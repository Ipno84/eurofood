import React, { useCallback } from 'react';

import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import PlainButton from './../../atoms/Button/PlainButton';
import Spacer from './../../atoms/Spacer';
import submitRegisterAction from './../../../../state/actions/ClientActions/submitRegisterAction';
import { useDispatch } from 'react-redux';

const ButtonSubmit = () => {
    const dispatch = useDispatch();
    const submitRegister = useCallback(() => dispatch(submitRegisterAction()), [
        dispatch
    ]);
    return (
        <ButtonWrapper>
            <PlainButton onPress={submitRegister}>Registrati</PlainButton>
            <Spacer top={16} />
        </ButtonWrapper>
    );
};

export default ButtonSubmit;
