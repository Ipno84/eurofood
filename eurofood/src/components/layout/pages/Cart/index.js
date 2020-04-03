import { Alert, SafeAreaView, Text } from 'react-native';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartRow from './CartRow';
import Container from './../../atoms/Container';
import PlainButton from './../../atoms/Button/PlainButton';
import { ROUTE_NAME_SHIPPING_ADDRESS } from '../../../../constants/RouteConstants';
import Snackbar from 'react-native-snackbar';
import TotalPrice from './TotalPrice';
import Touchable from './../../atoms/Button/Touchable';
import emptyCartAction from './../../../../state/actions/CartActions/emptyCartAction';
import isCartQuantitiesValidSelector from './../../../../state/selectors/CartSelectors/isCartQuantitiesValidSelector';
import { orange } from '../../../../constants/ThemeConstants';
import styled from 'styled-components/native';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import useCartRows from './../../../../hooks/products/useCartRows';

const Cart = () => {
    const { navigate } = useAppNavigation();
    const dispatch = useDispatch();
    const emptyCart = useCallback(() => dispatch(emptyCartAction()), [
        dispatch
    ]);
    const isCartQuantitiesValid = useSelector(state =>
        isCartQuantitiesValidSelector(state)
    );
    const cartRows = useCartRows();
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
                <PlainButton
                    disabled={!isCartQuantitiesValid}
                    onPress={() => {
                        if (!isCartQuantitiesValid) {
                            Snackbar.show({
                                text: `Nel tuo carrello sono presenti prodotti in quantitá superiore a quella presente nello stock di magazzino. Riduci la quantitá dei prodotti visualizzati in trasparenza nella lista per proseguire`,
                                duration: Snackbar.LENGTH_INDEFINITE,
                                action: {
                                    text: 'OK',
                                    textColor: orange.toString(),
                                    onPress: () => Snackbar.dismiss()
                                }
                            });
                        } else navigate(ROUTE_NAME_SHIPPING_ADDRESS);
                    }}>
                    Procedi
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
