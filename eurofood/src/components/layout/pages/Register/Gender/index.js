import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Radio from './Radio';
import RadioWrapper from './RadioWrapper';
import getRegisterIdGenderSelector from './../../../../../state/selectors/ClientSelectors/getRegisterIdGenderSelector';
import setRegisterIdGenderAction from './../../../../../state/actions/ClientActions/setRegisterIdGenderAction';

const Gender = () => {
    const dispatch = useDispatch();
    const idGender = useSelector(state => getRegisterIdGenderSelector(state));
    const setRegisterIdGender = useCallback(
        idGender => dispatch(setRegisterIdGenderAction(idGender)),
        [dispatch]
    );
    return (
        <RadioWrapper>
            <Radio
                onPress={() => setRegisterIdGender(1)}
                label="Sig."
                active={idGender === 1}
            />
            <Radio
                onPress={() => setRegisterIdGender(2)}
                label="Sig.ra"
                active={idGender === 2}
            />
        </RadioWrapper>
    );
};

export default Gender;
