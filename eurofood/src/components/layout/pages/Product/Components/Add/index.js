import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddToCartContainer from './AddToCartContainer';
import AddToCartText from './AddToCartText';
import AddToCartWrapper from './AddToCartWrapper';
import AddWrapper from './AddWrapper';
import ButtonText from './ButtonText';
import ButtonWrapper from './ButtonWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputNumber from './InputNumber';
import InputWrapper from './InputWrapper';
import Label from './Label';
import QuantityWrapper from './QuantityWrapper';
import Touchable from './../../../../atoms/Button/Touchable';
import addToCartAction from './../../../../../../state/actions/CartActions/addToCartAction';
import canAddItemToCartSelector from './../../../../../../state/selectors/CartSelectors/canAddItemToCartSelector';
import getProductStockQuantitySelector from './../../../../../../state/selectors/ProductsSelectors/getProductStockQuantitySelector';
import isProductItemActiveSelector from './../../../../../../state/selectors/ProductsSelectors/isProductItemActiveSelector';
import { white } from './../../../../../../constants/ThemeConstants';

const Add = ({ id }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const addToCart = useCallback(
        payload => dispatch(addToCartAction(payload)),
        [dispatch]
    );
    const stockQuantity = useSelector(state =>
        getProductStockQuantitySelector(state, id)
    );
    const canAddItemToCart = useSelector(state =>
        canAddItemToCartSelector(state, id, quantity)
    );
    const isProductItemActive = useSelector(state =>
        isProductItemActiveSelector(state, id)
    );
    const onChange = e => {
        let inputQuantity = e.nativeEvent.text;
        if (inputQuantity > stockQuantity) inputQuantity = stockQuantity;
        if (inputQuantity <= 0) inputQuantity = 1;
        setQuantity(inputQuantity);
    };
    const onButtonChange = isIncrement => {
        let inputQuantity = quantity;
        if (isIncrement) {
            inputQuantity = parseInt(inputQuantity + 1);
        } else inputQuantity = parseInt(inputQuantity - 1);
        if (inputQuantity > stockQuantity) inputQuantity = stockQuantity;
        if (inputQuantity <= 0) inputQuantity = 1;
        setQuantity(inputQuantity);
    };
    if (!isProductItemActive) return null;
    return (
        <AddWrapper>
            <QuantityWrapper>
                <Label>Quantitá</Label>
                <InputWrapper>
                    <Touchable onPress={() => onButtonChange(false)}>
                        <ButtonWrapper isLeft={true}>
                            <ButtonText>-</ButtonText>
                        </ButtonWrapper>
                    </Touchable>
                    <InputNumber onChange={onChange} value={String(quantity)} />
                    <Touchable onPress={() => onButtonChange(true)}>
                        <ButtonWrapper isLeft={false}>
                            <ButtonText>+</ButtonText>
                        </ButtonWrapper>
                    </Touchable>
                </InputWrapper>
            </QuantityWrapper>
            <Touchable
                onPress={() => canAddItemToCart && addToCart({ id, quantity })}>
                <AddToCartContainer disabled={!canAddItemToCart}>
                    <AddToCartWrapper>
                        <Icon
                            name="shopping-cart"
                            size={18}
                            color={white.toString()}
                        />
                        <AddToCartText>Aggiungi al carrello</AddToCartText>
                    </AddToCartWrapper>
                </AddToCartContainer>
            </Touchable>
        </AddWrapper>
    );
};

export default Add;
