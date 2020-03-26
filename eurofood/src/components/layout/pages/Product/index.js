import Add from './Components/Add';
import Price from './Components/Price';
import ProductAvailability from './Components/ProductAvailability';
import ProductDescription from './Components/ProductDescription';
import ProductImage from './Components/ProductImage';
import ProductInfo from './Components/ProductInfo';
import ProductName from './Components/ProductName';
import ProductWrapper from './Components/ProductWrapper';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import Share from './Components/Share';
import useProduct from './../../../../hooks/products/useProduct';

const Product = ({ route }) => {
    useProduct(route.params.id);
    return (
        <SafeAreaView>
            <ScrollView>
                <ProductWrapper>
                    <ProductName id={route.params.id} />
                    <ProductImage id={route.params.id} />
                    <Price id={route.params.id} />
                    <ProductAvailability id={route.params.id} />
                    <Add id={route.params.id} />
                    <ProductInfo id={route.params.id} />
                    <ProductDescription id={route.params.id} />
                    <Share id={route.params.id} />
                </ProductWrapper>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Product;
