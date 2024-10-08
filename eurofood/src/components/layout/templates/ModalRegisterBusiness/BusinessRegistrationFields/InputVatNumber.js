import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_VAT_NUMBER_ERROR } from './../../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterBusinessTypeDataVatNumberSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataVatNumberSelector';
import setRegisterVatNumberAction from './../../../../../state/actions/ClientActions/setRegisterVatNumberAction';

const InputVatNumber = () => {
    const dispatch = useDispatch();
    const setRegisterVatNumber = useCallback(
        text => dispatch(setRegisterVatNumberAction(text)),
        [dispatch]
    );
    const vatNumber = useSelector(state =>
        getRegisterBusinessTypeDataVatNumberSelector(state)
    );
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={{ width: '100%' }}>
                <CardInput
                    onChange={e => setRegisterVatNumber(e.nativeEvent.text)}
                    value={vatNumber}
                    placeholder="Partita IVA"
                    formKey="vat_number"
                />
                <ErrorMessage errorKey={REGISTER_VAT_NUMBER_ERROR} />
            </View>
        </View>
    );
};

export default InputVatNumber;
