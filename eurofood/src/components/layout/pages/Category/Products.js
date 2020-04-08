import { Text, View } from 'react-native';

import Container from './../../atoms/Container';
import ProductsList from './../../templates/ProductsList';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SectionTitle from './../../atoms/Text/SectionTitle';
import SkeletonSearchResults from './../SearchResults/SkeletonSearchResults';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';
import { useSelector } from 'react-redux';

const Category = ({ route }) => {
    const { id } = route.params;
    const name = useSelector(state => getCategoryNameSelector(state, id));
    const {
        products,
        onProductsEndReached,
        isCategoryLoading
    } = useCategoryProducts(id);
    if ((!products || products.length === 0) && isCategoryLoading) {
        return (
            <SafeAreaView>
                <Container>
                    <SectionTitle bigger={true} fix={true}>
                        {name}
                    </SectionTitle>
                </Container>
                <SkeletonSearchResults />
            </SafeAreaView>
        );
    } else if (products && products.length === 0 && !isCategoryLoading) {
        return (
            <SafeAreaView>
                <View style={{ padding: 16, alignItems: 'center' }}>
                    <Text>Nessun risultato trovato</Text>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView>
            <ProductsList
                title={name}
                items={products}
                onEndReached={onProductsEndReached}
            />
        </SafeAreaView>
    );
};

export default Category;
