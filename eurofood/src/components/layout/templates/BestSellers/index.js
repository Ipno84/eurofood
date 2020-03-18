import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import { ROUTE_NAME_CATEGORY } from '../../../../constants/RouteConstants';
import React from 'react';
import { product } from './../../../../assets/images/placeholder';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const products = [
    { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
];

const BestSellers = () => {
    const { navigate } = useAppNavigation();
    return (
        <>
            <ProductsGrid
                sectionTitle="I piú venduti"
                products={products}
                isHalf={true}
            />
            <FlatButton
                shadow={true}
                onPress={() => navigate(ROUTE_NAME_CATEGORY)}
                darkOrange={true}>
                Visualizza altri prodotti
            </FlatButton>
        </>
    );
};

export default BestSellers;
