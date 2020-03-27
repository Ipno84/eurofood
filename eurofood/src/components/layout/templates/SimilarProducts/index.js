import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import { ROUTE_NAME_CATEGORY } from '../../../../constants/RouteConstants';
import React from 'react';
import { product } from './../../../../assets/images/placeholder';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const products = [
    {
        name: 'Product 1',
        image: product,
        price: 10,
        wholesale_price: 9
    },
    { name: 'Product 2', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 3', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 4', image: product, price: 10, wholesale_price: 9 }
];

const SimilarProducts = () => {
    const { navigate } = useAppNavigation();
    return (
        <>
            <ProductsGrid
                sectionTitle="Simili ai prodotti che hai già acquistato"
                products={products}
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

export default SimilarProducts;
