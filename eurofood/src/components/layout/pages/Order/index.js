import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrderProductCard from './../../atoms/Card/OrderProductCard';
import PlainButton from './../../atoms/Button/PlainButton';
import { SafeAreaView } from 'react-native';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import backorderAction from './../../../../state/actions/CartActions/backorderAction';
import getOrderItemRowsSelector from './../../../../state/selectors/OrdersSelectors/getOrderItemRowsSelector';
import styled from 'styled-components/native';

const Order = ({ route }) => {
    const dispatch = useDispatch();
    const id =
        route && route.params && route.params.id ? route.params.id : null;
    const rows = useSelector(state => getOrderItemRowsSelector(state, id));
    const backorder = useCallback(() => dispatch(backorderAction(id)), [
        dispatch
    ]);
    return (
        <SafeAreaView>
            <ViewContainer>
                <TitleWrapper>
                    <SectionTitle bigger={true}>
                        Dettagli ordine n. {id}
                    </SectionTitle>
                </TitleWrapper>
                <FlatList
                    style={{ flex: 1 }}
                    contentContainerStyle={{
                        paddingBottom: 8
                    }}
                    data={rows}
                    renderItem={({ item }) => {
                        if (!item || (item && !item.id)) return null;
                        return (
                            <OrderProductCard
                                id={item.product_id}
                                name={item.product_name}
                                unitPrice={item.unit_price_tax_incl}
                                quantity={item.product_quantity}
                            />
                        );
                    }}
                    keyExtractor={(item, index) =>
                        item && item.id ? String(item.id) : String(index)
                    }
                />
                <PlainButton onPress={() => backorder()}>Riordina</PlainButton>
            </ViewContainer>
        </SafeAreaView>
    );
};

export default Order;

const ViewContainer = styled.View`
    height: 100%;
`;

const FlatList = styled.FlatList`
    flex: 1;
`;
