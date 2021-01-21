import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_CITY_ERROR } from './../../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterBusinessTypeDataCitySelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataCitySelector';
import setRegisterCityAction from './../../../../../state/actions/ClientActions/setRegisterCityAction';

const InputCity = () => {
    const dispatch = useDispatch();
    const setRegisterCity = useCallback(
        text => dispatch(setRegisterCityAction(text)),
        [dispatch]
    );
    const city = useSelector(state =>
        getRegisterBusinessTypeDataCitySelector(state)
    );
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={{ width: '100%' }}>
                <CardInput
                    onChange={e => setRegisterCity(e.nativeEvent.text)}
                    value={city}
                    placeholder="Cittá"
                    formKey="city"
                    textContentType="addressCity"
                />
                <ErrorMessage errorKey={REGISTER_CITY_ERROR} />
            </View>
        </View>
    );
};

export default InputCity;
