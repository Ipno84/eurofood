import CategoriesList from './../../templates/CategoriesList';
import React from 'react';
import { SafeAreaView } from 'react-native';
import getAssociatedProductsCountSelector from './../../../../state/selectors/CategoriesSelectors/getAssociatedProductsCountSelector';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import { useSelector } from 'react-redux';
import useSubCategories from '../../../../hooks/categories/useSubCategories';

const Category = ({ route }) => {
    const { id } = route.params;
    const name = useSelector(state => getCategoryNameSelector(state, id));
    const productsCount = useSelector(state =>
        getAssociatedProductsCountSelector(state, id)
    );
    const {
        subCategories,
        onCategoriesEndReached,
        isCategoriesChunking
    } = useSubCategories(id);
    return (
        <SafeAreaView>
            <CategoriesList
                mainCategoryId={id}
                title={name}
                items={subCategories}
                onEndReached={onCategoriesEndReached}
                isChunking={isCategoriesChunking}
                hasProducts={productsCount}
            />
        </SafeAreaView>
    );
};

export default Category;
