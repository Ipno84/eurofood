import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CreditCardInput } from 'react-native-input-credit-card';
import PlainButton from '../../atoms/Button/PlainButton';
import Spacer from '../../atoms/Spacer';
import isSelectedPaymentModuleSelector from '../../../../state/selectors/CheckoutSelectors/isSelectedPaymentModuleSelector';
import { red } from '../../../../constants/ThemeConstants';
import setStripeTokenAction from '../../../../state/actions/CheckoutActions/setStripeTokenAction';
import stripe from 'tipsi-stripe';
import styled from 'styled-components/native';

const PayWithCard = ({ isOrderSubmitted }) => {
    const dispatch = useDispatch();
    const setStripeToken = useCallback(
        token => dispatch(setStripeTokenAction(token)),
        [dispatch]
    );
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
                            .then(token => setStripeToken(token))
                            .catch(e => console.log('error', e));
                    }}
                    disabled={
                        !cardForm.valid || (isOrderSubmitted && cardForm.valid)
                    }>
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
