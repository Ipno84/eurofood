import React, { useState } from 'react';

import Container from '../../atoms/Container';
import { CreditCardInput } from 'react-native-input-credit-card';
import PlainButton from '../../atoms/Button/PlainButton';
import isSelectedPaymentModuleSelector from '../../../../state/selectors/CheckoutSelectors/isSelectedPaymentModuleSelector';
import stripe from 'tipsi-stripe';
import { useSelector } from 'react-redux';

const PayWithCard = () => {
    const [cardForm, setCardForm] = useState({
        status: {
            number: 'incomplete',
            expiry: 'incomplete',
            cvc: 'incomplete',
            name: 'incomplete'
        },
        valid: false,
        values: { number: '', expiry: '', cvc: '', name: '', type: undefined }
    });
    const isSelectedPaymentModule = useSelector(state =>
        isSelectedPaymentModuleSelector(state, 'stripe_official')
    );
    if (!isSelectedPaymentModule) return null;
    return (
        <Container>
            <CreditCardInput
                requiresName={true}
                requiresCVC={true}
                allowScroll={true}
                labels={{
                    number: 'Numero carta',
                    expiry: 'Scadenza',
                    cvc: 'CVC',
                    name: 'Nome Intestatario'
                }}
                placeholders={{
                    number: '1234 5678 1234 5678',
                    expiry: 'MM/YY',
                    cvc: 'CVC',
                    name: 'Mario Rossi'
                }}
                onChange={e => setCardForm(e)}
            />
            <PlainButton disabled={!cardForm.valid}>Paga</PlainButton>
        </Container>
    );
};

export default PayWithCard;
