import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import PlainButton from './../../atoms/Button/PlainButton';
import Spacer from './../../atoms/Spacer';
import isLoginSubmittedSelector from './../../../../state/selectors/ClientSelectors/isLoginSubmittedSelector';
import submitLoginAction from './../../../../state/actions/ClientActions/submitLoginAction';

const ButtonSubmit = () => {
    const dispatch = useDispatch();
    const isLoginSubmitted = useSelector(state =>
        isLoginSubmittedSelector(state)
    );
    const submitLogin = useCallback(() => dispatch(submitLoginAction()), [
        dispatch
    ]);
    return (
        <ButtonWrapper>
            <PlainButton
                disabled={isLoginSubmitted}
                onPress={() => !isLoginSubmitted && submitLogin()}>
                Accedi
            </PlainButton>
            <Spacer top={16} />
        </ButtonWrapper>
    );
};

export default ButtonSubmit;
