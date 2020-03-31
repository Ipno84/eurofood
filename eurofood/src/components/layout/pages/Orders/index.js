import { FlatList, SafeAreaView } from 'react-native';

import OrderCard from './../../atoms/Card/OrderCard';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import useOrders from './../../../../hooks/orders/useOrders';

const Orders = () => {
    const { orders } = useOrders();
    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{
                    paddingTop: 8,
                    paddingBottom: 8
                }}
                ListHeaderComponent={() => (
                    <TitleWrapper>
                        <SectionTitle bigger={true}>I miei Ordini</SectionTitle>
                    </TitleWrapper>
                )}
                data={orders}
                renderItem={({ item }) => {
                    if (!item || (item && !item.id)) return null;
                    return (
                        <OrderCard
                            id={item.id}
                            reference={item.reference}
                            date={item.date_add}
                            current_state={item.current_state}
                        />
                    );
                }}
                keyExtractor={(item, index) =>
                    item && item.id ? String(item.id) : String(index)
                }
            />
        </SafeAreaView>
    );
};

export default Orders;
