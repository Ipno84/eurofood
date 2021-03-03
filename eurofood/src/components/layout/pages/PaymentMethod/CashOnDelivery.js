import Container from '../../atoms/Container';
import PlainButton from '../../atoms/Button/PlainButton';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import isSelectedPaymentModuleSelector from '../../../../state/selectors/CheckoutSelectors/isSelectedPaymentModuleSelector';
import { useSelector } from 'react-redux';

const CashOnDelivery = ({ submitOrder, isOrderSubmitted }) => {
    const isSelectedPaymentModule = useSelector(state =>
        isSelectedPaymentModuleSelector(state, 'ps_cashondelivery')
    );
    if (!isSelectedPaymentModule) return null;
    return (
        <Container>
            <PlainButton
                disabled={isOrderSubmitted}
                left={() => {
                    if (!isOrderSubmitted) return null;
                    return (
                        <View
                            style={{
                                position: 'absolute',
                                top: 13,
                                left: 13
                            }}>
                            <ActivityIndicator
                                animating={true}
                                size="small"
                                color="#fff"
                            />
                        </View>
                    );
                }}
                onPress={() => !isOrderSubmitted && submitOrder()}>
                {isOrderSubmitted ? 'Elaborazione ordine...' : 'Completa'}
            </PlainButton>
        </Container>
    );
};

export default CashOnDelivery;
