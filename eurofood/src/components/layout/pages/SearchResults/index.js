import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, SectionList, View } from 'react-native';
import { batch, useDispatch } from 'react-redux';

import SearchSection from './../../organisms/SearchSection';
import { initialState } from '../../../../state/reducers/SearchReducer';
import setSearchResultsAction from '../../../../state/actions/SearchActions/setSearchResultsAction';
import setSearchSelectedCategoryIdAction from '../../../../state/actions/SearchActions/setSearchSelectedCategoryIdAction';
import setSearchTextAction from '../../../../state/actions/SearchActions/setSearchTextAction';
import styled from 'styled-components/native';
import useSearchProducts from '../../../../hooks/products/useSearchProducts';

const SearchResults = () => {
    const { searchResults, onSearchReachEnd } = useSearchProducts();
    const dispatch = useDispatch();
    const reset = useCallback(() => {
        batch(() => {
            dispatch(setSearchTextAction(initialState.searchText)),
                dispatch(setSearchResultsAction(initialState.results)),
                dispatch(
                    setSearchSelectedCategoryIdAction(
                        initialState.selectedCategoryId
                    )
                );
        });
    }, [dispatch]);
    useEffect(() => {
        return () => reset();
    }, []);
    return (
        <SafeAreaView>
            <SectionList
                stickySectionHeadersEnabled={true}
                sections={[{ data: searchResults }]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={() => <SearchSection />}
                onEndReached={onSearchReachEnd}
            />
        </SafeAreaView>
    );
};

export default SearchResults;

function Item({ title }) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

const Text = styled.Text`
    font-size: 22px;
    padding: 16px;
`;
