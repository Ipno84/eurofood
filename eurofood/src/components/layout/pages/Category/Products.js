import ProductsList from './../../templates/ProductsList';
import React from 'react';
import { SafeAreaView } from 'react-native';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';
import { useSelector } from 'react-redux';

const Category = ({ route }) => {
    const { id } = route.params;
    const name = useSelector(state => getCategoryNameSelector(state, id));
    const {
        products,
        onProductsEndReached,
        isProductsChunking
    } = useCategoryProducts(id);
    return (
        <SafeAreaView>
            <ProductsList
                title={name}
                items={products}
                onEndReached={onProductsEndReached}
                isChunking={isProductsChunking}
            />
        </SafeAreaView>
    );
};

export default Category;
