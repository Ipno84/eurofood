import React, { useCallback } from 'react';
import {
    USER_TYPE_BUSINESS,
    USER_TYPE_PRIVATE
} from '../../../../../constants/ClientConstants';
import { useDispatch, useSelector } from 'react-redux';

import Radio from './Radio';
import RadioWrapper from './RadioWrapper';
import getRegisterIdUserTypeSelector from './../../../../../state/selectors/ClientSelectors/getRegisterIdUserTypeSelector';
import setRegisterIdUserTypeAction from './../../../../../state/actions/ClientActions/setRegisterIdUserTypeAction';

const UserType = () => {
    const dispatch = useDispatch();
    const idUserType = useSelector(state =>
        getRegisterIdUserTypeSelector(state)
    );
    const setRegisterIdUserType = useCallback(
        idUserType => dispatch(setRegisterIdUserTypeAction(idUserType)),
        [dispatch]
    );
    return (
        <RadioWrapper>
            <Radio
                onPress={() => setRegisterIdUserType(USER_TYPE_PRIVATE)}
                label="Privato"
                active={idUserType === USER_TYPE_PRIVATE}
            />
            <Radio
                onPress={() => setRegisterIdUserType(USER_TYPE_BUSINESS)}
                label="Azienda"
                active={idUserType === USER_TYPE_BUSINESS}
            />
        </RadioWrapper>
    );
};

export default UserType;
