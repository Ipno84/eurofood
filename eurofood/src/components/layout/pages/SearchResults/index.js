import { SafeAreaView, Text, View } from 'react-native';
import { orange, screenWidth } from './../../../../constants/ThemeConstants';

import CategoriesModalSelector from '../../organisms/CategoriesModalSelector';
import ProductCard from '../../molecules/ProductCard';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import SearchSection from './../../organisms/SearchSection';
import { SectionGrid } from 'react-native-super-grid';
import SkeletonSearchResults from './SkeletonSearchResults';
import styled from 'styled-components/native';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import useSearchProducts from '../../../../hooks/products/useSearchProducts';

const SearchResults = () => {
    const {
        searchResults,
        onSearchProductsScroll,
        isSearching,
        stopSearch
    } = useSearchProducts();
    const { navigate } = useAppNavigation();
    return (
        <SafeAreaView>
            <Wrapper>
                {!isSearching && searchResults.length === 0 ? (
                    <>
                        <SearchSection />
                        <View style={{ padding: 16, alignItems: 'center' }}>
                            <Text>Nessun risultato trovato</Text>
                        </View>
                    </>
                ) : isSearching && searchResults.length === 0 ? (
                    <>
                        <SearchSection />
                        <SkeletonSearchResults />
                    </>
                ) : (
                    <SectionGrid
                        itemDimension={screenWidth / 3}
                        stickySectionHeadersEnabled={true}
                        sections={
                            !stopSearch && searchResults.length
                                ? [{ data: [...searchResults, ...[{}]] }]
                                : [{ data: searchResults }]
                        }
                        renderItem={({ item }) => (
                            <ProductCard
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                wholesale_price={item.wholesale_price}
                                onPress={() => navigate(ROUTE_NAME_PRODUCT)}
                            />
                        )}
                        renderSectionHeader={() => <SearchSection />}
                        onScroll={onSearchProductsScroll}
                    />
                )}
            </Wrapper>
            <CategoriesModalSelector />
        </SafeAreaView>
    );
};

export default SearchResults;

const Wrapper = styled.View`
    width: 100%;
    height: 100%;
`;
