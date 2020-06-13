import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_SDI_ERROR } from './../../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterBusinessTypeDataSdiSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataSdiSelector';
import setRegisterSdiAction from './../../../../../state/actions/ClientActions/setRegisterSdiAction';

const InputSdi = () => {
    const dispatch = useDispatch();
    const setRegisterSdi = useCallback(
        text => dispatch(setRegisterSdiAction(text)),
        [dispatch]
    );
    const sdi = useSelector(state =>
        getRegisterBusinessTypeDataSdiSelector(state)
    );
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={{ width: '100%' }}>
                <CardInput
                    onChange={e => setRegisterSdi(e.nativeEvent.text)}
                    value={sdi}
                    placeholder="SDI"
                    formKey="sdi"
                />
                <ErrorMessage errorKey={REGISTER_SDI_ERROR} />
            </View>
        </View>
    );
};

export default InputSdi;
