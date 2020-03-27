import {
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_CATEGORY_PRODUCTS,
    ROUTE_NAME_OFFER
} from '../../../../constants/RouteConstants';

import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import React from 'react';
import { product } from './../../../../assets/images/placeholder';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const CategorySection = ({ id, navKey, buttonLabel }) => {
    const { navigate } = useAppNavigation();
    return (
        <>
            <ProductsGrid id={id} />
            <FlatButton
                shadow={true}
                onPress={() => navigate(navKey, { id })}
                darkOrange={true}>
                {buttonLabel}
            </FlatButton>
        </>
    );
};

export default CategorySection;
