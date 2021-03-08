import { FlatList, SafeAreaView } from 'react-native';

import OrderCard from './../../atoms/Card/OrderCard';
import React, { useCallback, useMemo } from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import useOrders from './../../../../hooks/orders/useOrders';

const Orders = () => {
    const { orders } = useOrders();
    const contentContainerStyle = useMemo(
        () => ({ paddingTop: 8, paddingBottom: 8 }),
        []
    );

    const ListHeaderComponent = useCallback(
        () => (
            <TitleWrapper>
                <SectionTitle bigger={true}>I miei Ordini</SectionTitle>
            </TitleWrapper>
        ),
        []
    );

    const renderItem = useCallback(({ item }) => {
        if (!item || (item && !item.id)) return null;
        return (
            <OrderCard
                id={item.id}
                reference={item.reference}
                date={item.date_add}
                current_state={item.current_state}
            />
        );
    }, []);

    const keyExtractor = useCallback(
        (item, index) => (item && item.id ? String(item.id) : String(index)),
        []
    );

    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={contentContainerStyle}
                ListHeaderComponent={ListHeaderComponent}
                data={orders}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    );
};

export default Orders;
