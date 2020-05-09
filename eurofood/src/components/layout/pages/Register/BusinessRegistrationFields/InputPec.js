import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_PEC_ERROR } from './../../../../../constants/ErrorsConstants';
import getRegisterBusinessTypeDataPecSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataPecSelector';
import setRegisterPecAction from './../../../../../state/actions/ClientActions/setRegisterPecAction';

const InputPec = () => {
    const dispatch = useDispatch();
    const setRegisterPec = useCallback(
        text => dispatch(setRegisterPecAction(text)),
        [dispatch]
    );
    const pec = useSelector(state =>
        getRegisterBusinessTypeDataPecSelector(state)
    );
    return (
        <>
            <CardInput
                onChange={e => setRegisterPec(e.nativeEvent.text)}
                value={pec}
                placeholder="Pec"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <ErrorMessage errorKey={REGISTER_PEC_ERROR} />
        </>
    );
};

export default InputPec;
