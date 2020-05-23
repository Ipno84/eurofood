import React, { useCallback } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import ListHeaderText from './../../atoms/Text/ListHeaderText';
import RadioGroup from '../../atoms/RadioGroup';
import Spacer from './../../atoms/Spacer';
import Totals from '../../molecules/Totals';
import Wrapper from '../../atoms/Card/Wrapper';
import fixPrice from '../../../../helpers/fixPrice';
import getCarrierMethodsSelector from './../../../../state/selectors/SettingsSelectors/getCarrierMethodsSelector';
import getSelectedCarrierMethodIdSelector from './../../../../state/selectors/CheckoutSelectors/getSelectedCarrierMethodIdSelector';
import setSelectedCarrierMethodIdAction from './../../../../state/actions/CheckoutActions/setSelectedCarrierMethodIdAction';

const ShippingMethod = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => getCarrierMethodsSelector(state));
    const selectedCarrierMethodId = useSelector(state =>
        getSelectedCarrierMethodIdSelector(state)
    );
    const setSelectedCarrierMethodId = useCallback(
        id => dispatch(setSelectedCarrierMethodIdAction(id)),
        [dispatch]
    );
    return (
        <>
            <Spacer top={16} />
            <ListHeaderText center={true}>Metodo di spedizione</ListHeaderText>
            <CheckoutWrapper>
                <RadioGroup
                    options={items.map(e => ({
                        optionKey: e.id,
                        optionLabels: [
                            e.name,
                            e.delay,
                            e.price === 0
                                ? 'Gratis'
                                : `${fixPrice(
                                      e.price,
                                      true,
                                      2,
                                      true
                                  )} € Iva escl.`
                        ]
                    }))}
                    activeKey={selectedCarrierMethodId}
                    onRadioPress={item =>
                        setSelectedCarrierMethodId(item.optionKey)
                    }
                    ItemWrapper={ItemWrapper}
                    ItemInner={ItemInner}
                />
            </CheckoutWrapper>
            <Totals />
        </>
    );
};

export default ShippingMethod;

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
