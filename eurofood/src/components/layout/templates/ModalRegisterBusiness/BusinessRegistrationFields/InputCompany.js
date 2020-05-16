import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../../atoms/Input/CardInput';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import { REGISTER_COMPANY_ERROR } from './../../../../../constants/ErrorsConstants';
import getRegisterBusinessTypeDataCompanySelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataCompanySelector';
import setRegisterCompanyAction from './../../../../../state/actions/ClientActions/setRegisterCompanyAction';

const InputCompany = () => {
    const dispatch = useDispatch();
    const setRegisterCompany = useCallback(
        text => dispatch(setRegisterCompanyAction(text)),
        [dispatch]
    );
    const company = useSelector(state =>
        getRegisterBusinessTypeDataCompanySelector(state)
    );
    return (
        <>
            <CardInput
                onChange={e => setRegisterCompany(e.nativeEvent.text)}
                value={company}
                placeholder="Azienda"
                formKey="company"
                textContentType="organizationName"
            />
            <ErrorMessage errorKey={REGISTER_COMPANY_ERROR} />
        </>
    );
};

export default InputCompany;
