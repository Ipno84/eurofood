import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import React from 'react';
import { product } from './../../../../assets/images/placeholder';

const products = [
    { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
];

const Offers = () => {
    return (
        <>
            <ProductsGrid
                sectionTitle="Super Offerte"
                products={products}
                isHalf={true}
            />
            <FlatButton
                shadow={true}
                onPress={() => alert('Scopri tutte le offerte')}
                darkOrange={true}>
                Scopri tutte le offerte
            </FlatButton>
        </>
    );
};

export default Offers;
