import { SafeAreaView, Text, View } from 'react-native';

import React from 'react';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Card/Wrapper';
import styled from 'styled-components/native';
import useOrders from './../../../../hooks/orders/useOrders';

const Orders = () => {
    const { orders } = useOrders();
    console.log(orders);
    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{
                    paddingTop: 8,
                    paddingBottom: 8
                }}
                data={orders}
                renderItem={({ item }) => {
                    if (!item || (item && !item.id)) return null;
                    console.log(item.date_add);
                    return (
                        <Touchable>
                            <OrderCardWrapper>
                                <OrderCardTitle>
                                    Ordine n. {item.id}
                                </OrderCardTitle>
                                <OrderCardInfo>
                                    Codice: {item.reference}
                                </OrderCardInfo>
                                <OrderCardInfo>
                                    Data: {formatOrderDate(item.date_add)}
                                </OrderCardInfo>
                                <OrderCardInfo>
                                    Stato:{' '}
                                    {OrderStatesMap[item.current_state]
                                        ? OrderStatesMap[item.current_state]
                                        : ''}
                                </OrderCardInfo>
                            </OrderCardWrapper>
                        </Touchable>
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

const FlatList = styled.FlatList``;

const OrderCardWrapper = styled(Wrapper)`
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 16px;
`;

const OrderCardTitle = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    margin-bottom: 16px;
`;

const OrderCardInfo = styled.Text`
    font-size: 14px;
`;

const formatOrderDate = date => {
    const newDate = new Date(date);
    console.dir(newDate);
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    if (day < 10) day = '0' + String(day);
    if (month < 10) month = '0' + String(month);
    return `${day}/${month}/${year}`;
};

const OrderStatesMap = {
    1: 'In attesa di pagamento con assegno',
    2: 'Pagamento accettato',
    3: 'Preparazione in corso',
    4: 'Spedito',
    5: 'Consegnato',
    6: 'Annullato',
    7: 'Rimborso',
    8: 'Errore di pagamento',
    9: 'In attesa di rifornimento',
    10: 'In attesa di pagamento con bonifico bancario',
    11: 'Pagamento remoto accettato',
    12: 'In attesa di rifornimento',
    13: 'In attesa verifica contrassegno'
};
