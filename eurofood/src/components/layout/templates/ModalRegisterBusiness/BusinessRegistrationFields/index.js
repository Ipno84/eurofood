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

const BusinessRegistrationFields = () => {
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
