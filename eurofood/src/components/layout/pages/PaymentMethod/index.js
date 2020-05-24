import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CashOnDelivery from './CashOnDelivery';
import ChooseMethodItemInner from './../../atoms/Item/ChooseMethodItemInner';
import ChooseMethodItemWrapper from './../../atoms/Item/ChooseMethodItemWrapper';
import ChooseMethodWrapper from '../../atoms/Wrapper/ChooseMethodWrapper';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import PayWithCard from './PayWithCard';
import RadioGroup from '../../atoms/RadioGroup';
import Spacer from './../../atoms/Spacer';
import getPaymentMethodsSelector from './../../../../state/selectors/SettingsSelectors/getPaymentMethodsSelector';
import getSelectedPaymentMethodIdSelector from './../../../../state/selectors/CheckoutSelectors/getSelectedPaymentMethodIdSelector';
import isOrderSubmittedSelector from '../../../../state/selectors/OrdersSelectors/isOrderSubmittedSelector';
import setSelectedPaymentMethodIdAction from './../../../../state/actions/CheckoutActions/setSelectedPaymentMethodIdAction';
import submitOrderAction from '../../../../state/actions/OrdersActions/submitOrderAction';

const PaymentMethod = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => getPaymentMethodsSelector(state));
    const selectedPaymentMethodId = useSelector(state =>
        getSelectedPaymentMethodIdSelector(state)
    );
    const setSelectedPaymentMethodId = useCallback(
        selected => dispatch(setSelectedPaymentMethodIdAction(selected)),
        [dispatch]
    );

    const submitOrder = useCallback(() => dispatch(submitOrderAction()), [
        dispatch
    ]);
    const isOrderSubmitted = useSelector(state =>
        isOrderSubmittedSelector(state)
    );
    const subProps = {
        submitOrder,
        isOrderSubmitted
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <Spacer top={16} />
                <ListHeaderText center={true}>
                    Metodo di pagamento
                </ListHeaderText>
                <ChooseMethodWrapper>
                    <RadioGroup
                        options={items.map(e => ({
                            optionKey: e.id,
                            optionLabel: e.name
                        }))}
                        activeKey={selectedPaymentMethodId}
                        onRadioPress={({ optionKey }) =>
                            setSelectedPaymentMethodId(optionKey)
                        }
                        ItemWrapper={ChooseMethodItemWrapper}
                        ItemInner={ChooseMethodItemInner}
                    />
                </ChooseMethodWrapper>
                <CashOnDelivery {...subProps} />
                <PayWithCard {...subProps} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default PaymentMethod;
