import React, { useCallback } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import CartRow from './CartRow';
import Container from './../../atoms/Container';
import PlainButton from './../../atoms/Button/PlainButton';
import TotalPrice from './TotalPrice';
import Touchable from './../../atoms/Button/Touchable';
import emptyCartAction from './../../../../state/actions/CartActions/emptyCartAction';
import getCurrentCartAssociationsCartRowsSelector from './../../../../state/selectors/CartSelectors/getCurrentCartAssociationsCartRowsSelector';

const Cart = () => {
    const dispatch = useDispatch();
    const emptyCart = useCallback(() => dispatch(emptyCartAction()), [
        dispatch
    ]);
    const cartRows = useSelector(state =>
        getCurrentCartAssociationsCartRowsSelector(state)
    );
    if (!cartRows || cartRows.length === 0) {
        return (
            <Container>
                <Text>
                    Non è stato aggiunto ancora alcun prodotto al carrello
                </Text>
            </Container>
        );
    }
    return (
        <SafeAreaView>
            <ViewContainer>
                <Bar>
                    <Left>
                        <TotalPrice />
                    </Left>
                    <Touchable onPress={() => emptyCart()}>
                        <Right>
                            <HeaderButtonText>Reset</HeaderButtonText>
                        </Right>
                    </Touchable>
                </Bar>
                <FlatList
                    contentContainerStyle={{
                        paddingTop: 8,
                        paddingBottom: 8
                    }}
                    data={cartRows}
                    renderItem={({ item }) => {
                        if (!item || (item && !item.id_product)) return null;
                        return <CartRow id_product={item.id_product} />;
                    }}
                    keyExtractor={(item, index) =>
                        item && item.id_product
                            ? String(item.id_product)
                            : String(index)
                    }
                />
                <PlainButton onPress={() => alert('create and send order')}>
                    Invia ordine
                </PlainButton>
            </ViewContainer>
        </SafeAreaView>
    );
};

export default Cart;

const ViewContainer = styled.View`
    height: 100%;
`;

const FlatList = styled.FlatList`
    flex: 1;
`;

const Bar = styled.View`
    height: 48px;
    justify-content: center;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    padding-left: 16px;
    padding-right: 16px;
    border-bottom-width: 1px;
    flex-direction: row;
`;

const HeaderButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 18px;
    text-transform: uppercase;
`;

const Left = styled.View`
    flex: 1;
    justify-content: center;
`;

const Right = styled.View`
    height: 48px;
    padding-left: 8px;
    padding-right: 8px;
    justify-content: center;
`;
