import React, { useCallback } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import RadioGroup from '../../atoms/RadioGroup';
import Wrapper from '../../atoms/Card/Wrapper';
import getActivePaymentMethodsSelector from './../../../../state/selectors/SettingsSelectors/getActivePaymentMethodsSelector';
import getSelectedPaymentMethodIdSelector from './../../../../state/selectors/CheckoutSelectors/getSelectedPaymentMethodIdSelector';
import setSelectedPaymentMethodIdAction from './../../../../state/actions/CheckoutActions/setSelectedPaymentMethodIdAction';

// import stripe from 'tipsi-stripe';

const PaymentMethod = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => getActivePaymentMethodsSelector(state));
    const selectedPaymentMethodId = useSelector(state =>
        getSelectedPaymentMethodIdSelector(state)
    );
    const setSelectedPaymentMethodId = useCallback(
        selected => dispatch(setSelectedPaymentMethodIdAction(selected)),
        [dispatch]
    );
    return (
        <CheckoutWrapper>
            <RadioGroup
                options={items.map(e => ({
                    optionKey: e.module,
                    optionLabel: e.name
                }))}
                activeKey={selectedPaymentMethodId}
                onRadioPress={item => setSelectedPaymentMethodId(item.id)}
                ItemWrapper={ItemWrapper}
                ItemInner={ItemInner}
            />
        </CheckoutWrapper>
    );
};

export default PaymentMethod;

const CheckoutWrapper = styled(Wrapper)`
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
`;

const CheckoutItem = styled.View`
    ${({ isLast }) =>
        !isLast &&
        css`
            border-bottom-width: 1px;
            border-bottom-color: ${({ theme }) => theme.colors.lightGray(1)};
            border-style: solid;
        `}
`;

const ItemInner = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

const ItemWrapper = ({ children }) => {
    return <CheckoutItem>{children}</CheckoutItem>;
};
