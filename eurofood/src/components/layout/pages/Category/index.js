import CategoriesList from './../../templates/CategoriesList';
import { ROUTE_NAME_CATEGORY_PRODUCTS } from '../../../../constants/RouteConstants';
import React from 'react';
import { SafeAreaView } from 'react-native';
import getAssociatedCategoriesCountSelector from './../../../../state/selectors/CategoriesSelectors/getAssociatedCategoriesCountSelector';
import getAssociatedProductsCountSelector from './../../../../state/selectors/CategoriesSelectors/getAssociatedProductsCountSelector';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import { useSelector } from 'react-redux';
import useSubCategories from '../../../../hooks/categories/useSubCategories';

const Category = ({ route }) => {
    const { replace } = useAppNavigation();
    const { id } = route.params;
    const name = useSelector(state => getCategoryNameSelector(state, id));
    const associatedCategoriesCount = useSelector(state =>
        getAssociatedCategoriesCountSelector(state, id)
    );
    const productsCount = useSelector(state =>
        getAssociatedProductsCountSelector(state, id)
    );
    const {
        subCategories,
        onCategoriesEndReached,
        isCategoriesChunking
    } = useSubCategories(id);
    if (productsCount && !associatedCategoriesCount) {
        replace(ROUTE_NAME_CATEGORY_PRODUCTS, { id });
    }
    return (
        <SafeAreaView>
            <CategoriesList
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
