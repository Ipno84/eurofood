import React, { useCallback } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from './../../../atoms/Input';
import Touchable from './../../../atoms/Button/Touchable';
import getCurrentCartItemQuantitySelector from './../../../../../state/selectors/CartSelectors/getCurrentCartItemQuantitySelector';
import getProductStockQuantitySelector from './../../../../../state/selectors/ProductsSelectors/getProductStockQuantitySelector';
import { gray } from './../../../../../constants/ThemeConstants';
import setCurrentCartItemQuantityAction from './../../../../../state/actions/CartActions/setCurrentCartItemQuantityAction';

const ProductQuantity = ({ id }) => {
    const dispatch = useDispatch();
    const setCurrentCartItemQuantity = useCallback(
        quantity => dispatch(setCurrentCartItemQuantityAction(id, quantity)),
        [dispatch]
    );
    const quantity = useSelector(state =>
        getCurrentCartItemQuantitySelector(state, id)
    );
    const stockQuantity = useSelector(state =>
        getProductStockQuantitySelector(state, id)
    );
    const onInputChange = e => {
        const text = parseInt(e.nativeEvent.text);
        if (!isNaN(text) && text > 0 && text <= stockQuantity) {
            setCurrentCartItemQuantity(text);
        }
    };
    return (
        <Wrapper>
            <Touchable onPress={() => setCurrentCartItemQuantity(0)}>
                <ButtonWrapper isLeft={true}>
                    <Icon
                        size={18}
                        name="trash-can-outline"
                        color={gray.toString()}
                    />
                </ButtonWrapper>
            </Touchable>
            {quantity > 1 ? (
                <Touchable
                    onPress={() =>
                        setCurrentCartItemQuantity(parseInt(quantity - 1))
                    }>
                    <ButtonWrapper isLeft={true}>
                        <ButtonText>-</ButtonText>
                    </ButtonWrapper>
                </Touchable>
            ) : null}
            <InputNumber
                keyboardType="number-pad"
                value={String(quantity)}
                onChange={onInputChange}
            />
            {stockQuantity > quantity ? (
                <Touchable
                    onPress={() =>
                        setCurrentCartItemQuantity(parseInt(quantity + 1))
                    }>
                    <ButtonWrapper isLeft={false}>
                        <ButtonText>+</ButtonText>
                    </ButtonWrapper>
                </Touchable>
            ) : null}
        </Wrapper>
    );
};

export default ProductQuantity;

const Wrapper = styled.View`
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    border-radius: 5px;
    flex-direction: row;
    overflow: hidden;
    height: 40px;
    margin-top: 8px;
`;

const InputNumber = styled(Input)`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    color: ${({ theme }) => theme.colors.gray(1)};
    height: 35px;
    /* line-height: 30px; */
    padding: 0;
    flex: 1;
`;

const ButtonWrapper = styled.View`
    width: 36px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    ${({ isLeft }) =>
        isLeft
            ? css`
                  border-right-width: 1px;
              `
            : css`
                  border-left-width: 1px;
              `}
`;

const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.gray(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    font-size: 16px;
    line-height: 40px;
    padding-bottom: 4px;
`;
