import Container from '../../atoms/Container';
import PlainButton from '../../atoms/Button/PlainButton';
import React from 'react';
import isSelectedPaymentModuleSelector from '../../../../state/selectors/CheckoutSelectors/isSelectedPaymentModuleSelector';
import { useSelector } from 'react-redux';

const CashOnDelivery = () => {
    const isSelectedPaymentModule = useSelector(state =>
        isSelectedPaymentModuleSelector(state, 'ps_cashondelivery')
    );
    if (!isSelectedPaymentModule) return null;
    return (
        <Container>
            <PlainButton>Completa</PlainButton>
        </Container>
    );
};

export default CashOnDelivery;
