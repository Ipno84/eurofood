import React, { useState } from 'react';

import { CreditCardInput } from 'react-native-input-credit-card';
import PlainButton from '../../atoms/Button/PlainButton';
import Spacer from '../../atoms/Spacer';
import isSelectedPaymentModuleSelector from '../../../../state/selectors/CheckoutSelectors/isSelectedPaymentModuleSelector';
import { red } from '../../../../constants/ThemeConstants';
import stripe from 'tipsi-stripe';
import styled from 'styled-components/native';
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
    const [token, setToken] = useState(null);
    const isSelectedPaymentModule = useSelector(state =>
        isSelectedPaymentModuleSelector(state, 'stripe_official')
    );
    if (!isSelectedPaymentModule) return null;
    return (
        <>
            <Spacer top={16} />
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
                cardScale={1.1}
                invalidColor={red.toString()}
                onChange={e => setCardForm(e)}
            />
            <Spacer top={-16} />
            <Container>
                <PlainButton
                    onPress={() => {
                        console.log(cardForm);
                        stripe
                            .createTokenWithCard({
                                number: cardForm.values.number,
                                expMonth: Number(
                                    cardForm.values.expiry.split('/')[0]
                                ),
                                expYear: Number(
                                    cardForm.values.expiry.split('/')[1]
                                ),
                                cvc: cardForm.values.cvc,
                                name: cardForm.values.name
                            })
                            .then(success => setToken(success))
                            .catch(e => console.log('error', e));
                        // stripe
                        //     .paymentRequestWithCardForm()
                        //     .then(e => console.log('success', e))
                        //     .catch(e => console.log('error', e));
                    }}
                    disabled={!cardForm.valid}>
                    Paga
                </PlainButton>
            </Container>
        </>
    );
};

export default PayWithCard;

const Container = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
`;
