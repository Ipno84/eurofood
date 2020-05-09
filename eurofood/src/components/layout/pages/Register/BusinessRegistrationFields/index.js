import InputAddress from './InputAddress';
import InputCity from './InputCity';
import InputCompany from './InputCompany';
import InputPec from './InputPec';
import InputPhone from './InputPhone';
import InputPostcode from './InputPostcode';
import InputSdi from './InputSdi';
import InputVatNumber from './InputVatNumber';
import React from 'react';
import SelectIdCountry from './SelectIdCountry';
import SelectIdState from './SelectIdState';
import { USER_TYPE_PRIVATE } from '../../../../../constants/ClientConstants';
import getRegisterIdUserTypeSelector from './../../../../../state/selectors/ClientSelectors/getRegisterIdUserTypeSelector';
import { useSelector } from 'react-redux';

const BusinessRegistrationFields = () => {
    const idUserType = useSelector(state =>
        getRegisterIdUserTypeSelector(state)
    );
    if (idUserType === USER_TYPE_PRIVATE) return null;
    return (
        <>
            <InputCompany />
            <InputVatNumber />
            <InputSdi />
            <InputPec />
            <InputAddress />
            <InputPostcode />
            <InputCity />
            <SelectIdState />
            <SelectIdCountry />
            <InputPhone />
        </>
    );
};

export default BusinessRegistrationFields;
