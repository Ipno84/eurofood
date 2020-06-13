import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_POSTCODE_ERROR } from './../../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterBusinessTypeDataPostcodeSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataPostcodeSelector';
import setRegisterPostcodeAction from './../../../../../state/actions/ClientActions/setRegisterPostcodeAction';

const InputPostcode = () => {
    const dispatch = useDispatch();
    const setRegisterPostcode = useCallback(
        text => dispatch(setRegisterPostcodeAction(text)),
        [dispatch]
    );
    const postcode = useSelector(state =>
        getRegisterBusinessTypeDataPostcodeSelector(state)
    );
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={{ width: '100%' }}>
                <CardInput
                    onChange={e => setRegisterPostcode(e.nativeEvent.text)}
                    value={postcode}
                    placeholder="Codice Postale"
                    formKey="postcode"
                    autoCompleteType="postal-code"
                    textContentType="postalCode"
                    keyboardType="numeric"
                />
                <ErrorMessage errorKey={REGISTER_POSTCODE_ERROR} />
            </View>
        </View>
    );
};

export default InputPostcode;
