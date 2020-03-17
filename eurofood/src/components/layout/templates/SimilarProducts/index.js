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

const SimilarProducts = () => {
    return (
        <>
            <ProductsGrid
                sectionTitle="Simili ai prodotti che hai già acquistato"
                products={products}
                isHalf={true}
            />
            <FlatButton
                shadow={true}
                onPress={() => alert('Visualizza altri prodotti')}
                darkOrange={true}>
                Visualizza altri prodotti
            </FlatButton>
        </>
    );
};

export default SimilarProducts;
