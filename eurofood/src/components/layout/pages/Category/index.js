import CategoriesList from './../../templates/CategoriesList';
import ProductsList from './../../templates/ProductsList';
import React from 'react';
import { SafeAreaView } from 'react-native';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';
import { useSelector } from 'react-redux';
import useSubCategories from '../../../../hooks/categories/useSubCategories';

const Category = ({ route }) => {
    const { id } = route.params;
    const name = useSelector(state => getCategoryNameSelector(state, id));
    const { subCategories, onCategoriesEndReached } = useSubCategories(id);
    const {
        products,
        onProductsEndReached,
        isProductsChunking
    } = useCategoryProducts(id);
    return (
        <SafeAreaView>
            {subCategories && subCategories.length ? (
                <CategoriesList
                    title={name}
                    items={subCategories}
                    onEndReached={onCategoriesEndReached}
                    hasProducts={products && products.length}
                />
            ) : products && products.length ? (
                <ProductsList
                    items={products}
                    onEndReached={onProductsEndReached}
                    isChunking={isProductsChunking}
                />
            ) : null}
        </SafeAreaView>
    );
};

export default Category;
