import { FlatList, SafeAreaView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesModalSelector from '../../organisms/CategoriesModalSelector';
import generateTemplate from './../../../../helpers/generateTemplate';
import getHomeTemplateSelector from './../../../../state/selectors/SettingsSelectors/getHomeTemplateSelector';
// import homeTemplate from './../../../../assets/templates/homeTemplate';
import setHomeViewableItemsAction from './../../../../state/actions/SettingsActions/setHomeViewableItemsAction';

const Home = () => {
    const dispatch = useDispatch();
    const templateReal = useSelector(state => getHomeTemplateSelector(state));
    const setHomeViewableItems = useCallback(
        payload => dispatch(setHomeViewableItemsAction(payload)),
        [dispatch]
    );
    return (
        <SafeAreaView>
            <FlatList
                scrollEventThrottle={16}
                data={templateReal}
                contentContainerStyle={{ paddingBottom: 8 }}
                onViewableItemsChanged={e => {
                    setHomeViewableItems({
                        items: e.viewableItems.map(e => e.key)
                    });
                }}
                renderItem={({ item }) => {
                    if (!item) return null;
                    return generateTemplate([item], [], {
                        keyCheck: item.keyCheck
                    });
                }}
                keyExtractor={(item, index) =>
                    item && item.keyCheck ? String(item.keyCheck) : index
                }
                viewabilityConfig={{ itemVisiblePercentThreshold: 0 }}
            />
            <CategoriesModalSelector />
        </SafeAreaView>
    );
};

export default Home;
