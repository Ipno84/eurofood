import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import PlainButton from './../../atoms/Button/PlainButton';
import Spacer from './../../atoms/Spacer';
import isRegisterSubmittedSelector from './../../../../state/selectors/ClientSelectors/isRegisterSubmittedSelector';
import submitRegisterAction from './../../../../state/actions/ClientActions/submitRegisterAction';

const ButtonSubmit = () => {
    const dispatch = useDispatch();
    const isRegisterSubmitted = useSelector(state =>
        isRegisterSubmittedSelector(state)
    );
    const submitRegister = useCallback(() => dispatch(submitRegisterAction()), [
        dispatch
    ]);
    return (
        <ButtonWrapper>
            <PlainButton
                disabled={isRegisterSubmitted}
                onPress={() => !isRegisterSubmitted && submitRegister()}>
                Registrati
            </PlainButton>
            <Spacer top={16} />
        </ButtonWrapper>
    );
};

export default ButtonSubmit;
