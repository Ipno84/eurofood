import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import PlainButton from './../../atoms/Button/PlainButton';
import Spacer from './../../atoms/Spacer';
import isBillingAddressSubmittedSelector from './../../../../state/selectors/ClientSelectors/isBillingAddressSubmittedSelector';
import submitBillingAddressAction from './../../../../state/actions/ClientActions/submitBillingAddressAction';

const ButtonSubmit = () => {
    const dispatch = useDispatch();
    const submitBillingAddress = useCallback(
        () => dispatch(submitBillingAddressAction()),
        [dispatch]
    );
    const isBillingAddressSubmitted = useSelector(state =>
        isBillingAddressSubmittedSelector(state)
    );
    return (
        <ButtonWrapper>
            <PlainButton
                disabled={isBillingAddressSubmitted}
                onPress={() => submitBillingAddress()}>
                Salva Indirizzo
            </PlainButton>
            <Spacer top={16} />
        </ButtonWrapper>
    );
};

export default ButtonSubmit;
