import { FlatList, SafeAreaView } from 'react-native';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TreeItemsReferences from './../../../../helpers/TreeItemsReferences';
import generateTemplate from './../../../../helpers/generateTemplate';
import getHomeTemplateSelector from './../../../../state/selectors/SettingsSelectors/getHomeTemplateSelector';
import hasServerSettingsSelector from './../../../../state/selectors/SettingsSelectors/hasServerSettingsSelector';
//import homeTemplate from './../../../../assets/templates/homeTemplate';
import setHomeViewableItemsAction from './../../../../state/actions/SettingsActions/setHomeViewableItemsAction';

const treeItemsReferences = new TreeItemsReferences();

const Home = () => {
    const dispatch = useDispatch();
    const templateReal = useSelector(state => getHomeTemplateSelector(state));
    const hasServerSettings = useSelector(state =>
        hasServerSettingsSelector(state)
    );
    const setHomeViewableItems = useCallback(
        payload => dispatch(setHomeViewableItemsAction(payload)),
        [dispatch]
    );
    const onViewableItemsChanged = useCallback(
        e => {
            setHomeViewableItems({
                items: e.viewableItems.map(e => e.key)
            });
        },
        [setHomeViewableItems]
    );
    return (
        <SafeAreaView>
            {hasServerSettings && templateReal && templateReal.length ? (
                <FlatList
                    ref={ref =>
                        treeItemsReferences.addReference({
                            key: 'homeFlatList',
                            reference: ref
                        })
                    }
                    scrollEventThrottle={16}
                    data={templateReal}
                    contentContainerStyle={{ paddingBottom: 8 }}
                    onViewableItemsChanged={onViewableItemsChanged}
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
            ) : null}
        </SafeAreaView>
    );
};

export default Home;
