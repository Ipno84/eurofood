import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import { ROUTE_NAME_OFFER } from '../../../../constants/RouteConstants';
import React from 'react';
import { product } from './../../../../assets/images/placeholder';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const products = [
    { name: 'Product 1', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 2', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 3', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 4', image: product, price: 10, wholesale_price: 9 }
];

const Offers = () => {
    const { navigate } = useAppNavigation();
    return (
        <>
            <ProductsGrid sectionTitle="Offerte" products={products} />
            <FlatButton
                shadow={true}
                onPress={() => navigate(ROUTE_NAME_OFFER)}
                darkOrange={true}>
                Scopri tutte le offerte
            </FlatButton>
        </>
    );
};

export default Offers;
