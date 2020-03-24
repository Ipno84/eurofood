import Price from './Components/Price';
import ProductImage from './Components/ProductImage';
import ProductName from './Components/ProductName';
import ProductWrapper from './Components/ProductWrapper';
import React from 'react';
import { SafeAreaView } from 'react-native';
import getProductPriceInfoSelector from './../../../../state/selectors/ProductsSelectors/getProductPriceInfoSelector';
import getProductStockQuantitySelector from './../../../../state/selectors/ProductsSelectors/getProductStockQuantitySelector';
import useProduct from './../../../../hooks/products/useProduct';
import useProductDefaultImage from './../../../../hooks/products/useProductDefaultImage';
import { useSelector } from 'react-redux';

const id = 3893;

const Product = () => {
    const product = useProduct(id);
    const stockQuantity = useSelector(state =>
        getProductStockQuantitySelector(state, id)
    );
    return (
        <SafeAreaView>
            <ProductWrapper>
                <ProductName id={id} />
                <ProductImage id={id} />
                <Price id={id} />
            </ProductWrapper>
        </SafeAreaView>
    );
};

export default Product;
