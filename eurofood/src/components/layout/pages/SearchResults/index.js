import { SafeAreaView, SectionList, View } from 'react-native';
import { orange, screenWidth } from './../../../../constants/ThemeConstants';

import ProductCard from '../../molecules/ProductCard';
import Progress from './../../atoms/Progress';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import SearchSection from './../../organisms/SearchSection';
import { SectionGrid } from 'react-native-super-grid';
import useAppNavigation from '../../../../hooks/useAppNavigation';
import useSearchProducts from '../../../../hooks/products/useSearchProducts';

const SearchResults = () => {
    const {
        searchResults,
        onSearchProductsScroll,
        isSearching
    } = useSearchProducts();
    const { navigate } = useAppNavigation();
    console.log(isSearching);
    return (
        <SafeAreaView>
            <SectionGrid
                itemDimension={screenWidth / 3}
                stickySectionHeadersEnabled={true}
                sections={[{ data: searchResults }]}
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
            {isSearching ? <Progress color={orange.toString()} /> : null}
        </SafeAreaView>
    );
};

export default SearchResults;
