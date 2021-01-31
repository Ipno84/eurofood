import { ROUTE_NAME_PAYMENT_METHOD } from '../../../../constants/RouteConstants';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChooseMethodItemInner from './../../atoms/Item/ChooseMethodItemInner';
import ChooseMethodItemWrapper from './../../atoms/Item/ChooseMethodItemWrapper';
import ChooseMethodWrapper from '../../atoms/Wrapper/ChooseMethodWrapper';
import Container from './../../atoms/Container';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import PlainButton from '../../atoms/Button/PlainButton';
import RadioGroup from '../../atoms/RadioGroup';
import Spacer from './../../atoms/Spacer';
import Totals from '../../molecules/Totals';
import fixPrice from '../../../../helpers/fixPrice';
import getCarrierMethodsSelector from './../../../../state/selectors/SettingsSelectors/getCarrierMethodsSelector';
import getSelectedCarrierMethodIdSelector from './../../../../state/selectors/CheckoutSelectors/getSelectedCarrierMethodIdSelector';
import isGetCarriersLoadingSelector from './../../../../state/selectors/CarriersSelectors/isGetCarriersLoadingSelector';
import getCarriersSelector from './../../../../state/selectors/CarriersSelectors/getCarriersSelector';
import setSelectedCarrierMethodIdAction from './../../../../state/actions/CheckoutActions/setSelectedCarrierMethodIdAction';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import getCarriersAction from '../../../../state/actions/CarriersActions/getCarriersAction';
import { ActivityIndicator, View } from 'react-native';
import { darkOrange } from '../../../../constants/ThemeConstants';

const ShippingMethod = () => {
    const isLoading = useSelector(isGetCarriersLoadingSelector);
    const { navigate } = useAppNavigation();
    const dispatch = useDispatch();
    const items = useSelector(state => getCarrierMethodsSelector(state));
    const carriers = useSelector(getCarriersSelector);
    const selectedCarrierMethodId = useSelector(state =>
        getSelectedCarrierMethodIdSelector(state)
    );
    const setSelectedCarrierMethodId = useCallback(
        id => dispatch(setSelectedCarrierMethodIdAction(id)),
        [dispatch]
    );

    const getCarriers = useCallback(() => dispatch(getCarriersAction()), [
        dispatch
    ]);

    useEffect(() => {
        getCarriers();
    }, [getCarriers]);

    if (isLoading)
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <ActivityIndicator size="large" color={darkOrange} />
            </View>
        );

    return (
        <>
            <Spacer top={16} />
            <ListHeaderText center={true}>Metodo di spedizione</ListHeaderText>
            <ChooseMethodWrapper>
                <RadioGroup
                    options={carriers.map(e => ({
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
                    onRadioPress={({ optionKey }) =>
                        setSelectedCarrierMethodId(optionKey)
                    }
                    ItemWrapper={ChooseMethodItemWrapper}
                    ItemInner={ChooseMethodItemInner}
                />
            </ChooseMethodWrapper>
            <Totals />
            {carriers.length > 0 && (
                <Container>
                    <Spacer top={-16} />
                    <PlainButton
                        onPress={() => {
                            navigate(ROUTE_NAME_PAYMENT_METHOD);
                        }}>
                        Procedi
                    </PlainButton>
                    <Spacer top={16} />
                </Container>
            )}
        </>
    );
};

export default ShippingMethod;
