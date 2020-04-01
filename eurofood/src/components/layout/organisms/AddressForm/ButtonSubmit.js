import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWrapper from './../../atoms/Wrapper/ButtonWrapper';
import PlainButton from './../../atoms/Button/PlainButton';
import Spacer from './../../atoms/Spacer';
import isAddressSubmittedSelector from './../../../../state/selectors/AddressesSelectors/isAddressSubmittedSelector';
import submitAddressAction from './../../../../state/actions/AddressesActions/submitAddressAction';

const ButtonSubmit = () => {
    const dispatch = useDispatch();
    const isAddressSubmitted = useSelector(state =>
        isAddressSubmittedSelector(state)
    );
    const submitAddress = useCallback(() => dispatch(submitAddressAction()), [
        dispatch
    ]);
    return (
        <ButtonWrapper>
            <PlainButton
                disabled={isAddressSubmitted}
                onPress={() => !isAddressSubmitted && submitAddress()}>
                Salva Indirizzo
            </PlainButton>
            <Spacer top={16} />
        </ButtonWrapper>
    );
};

export default ButtonSubmit;
