import { SafeAreaView, Text, View } from 'react-native';

import CategoriesModalSelector from '../../organisms/CategoriesModalSelector';
import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import SearchSection from './../../organisms/SearchSection';
import { SectionGrid } from 'react-native-super-grid';
import SkeletonSearchResults from './SkeletonSearchResults';
import { screenWidth } from './../../../../constants/ThemeConstants';
import styled from 'styled-components/native';
import useSearchProducts from '../../../../hooks/products/useSearchProducts';

const SearchResults = () => {
    const {
        searchResults,
        onSearchProductsScroll,
        isSearching,
        stopSearch
    } = useSearchProducts();
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
                        renderItem={({ item }) => <ProductCard id={item.id} />}
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
