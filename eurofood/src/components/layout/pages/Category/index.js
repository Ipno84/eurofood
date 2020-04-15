import { SafeAreaView, Text, View } from 'react-native';

import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import Container from './../../atoms/Container';
import ProductsList from './../../templates/ProductsList';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import SkeletonSearchResults from './../SearchResults/SkeletonSearchResults';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';
import { useSelector } from 'react-redux';
import useSubCategories from '../../../../hooks/categories/useSubCategories';

const Category = ({ route }) => {
    const { id } = route.params;
    const name = useSelector(state => getCategoryNameSelector(state, id));
    const { subCategories } = useSubCategories(id);
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
                {subCategories && subCategories.length ? (
                    <CategoriesHorizontalSelector categories={subCategories} />
                ) : null}
                <View style={{ padding: 16, alignItems: 'center' }}>
                    <Text>Nessun risultato trovato</Text>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView>
            <ProductsList
                headerComponent={() => {
                    return (
                        <>
                            <Container>
                                <SectionTitle bigger={true} fix={true}>
                                    {name}
                                </SectionTitle>
                            </Container>
                            {subCategories && subCategories.length ? (
                                <CategoriesHorizontalSelector
                                    categories={subCategories}
                                />
                            ) : null}
                        </>
                    );
                }}
                title={name}
                items={products}
                onEndReached={onProductsEndReached}
            />
        </SafeAreaView>
    );
};

export default Category;
