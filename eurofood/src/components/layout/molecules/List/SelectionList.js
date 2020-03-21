import { Dimensions, SectionList } from 'react-native';
import React, { useState } from 'react';

import ListHeader from './../../atoms/Item/ListHeader';
import ListItem from './../../atoms/Item/ListItem';
import ListSectionHeader from './../../atoms/Item/ListSectionHeader';

const { height } = Dimensions.get('window');

const SelectionList = ({
    onScrollToEnd,
    onPressHeader,
    onPressItem,
    onPressNotItem,
    headerTitle,
    items = [],
    keyExtractor
}) => {
    const [reachedTop, setReachedTop] = useState(false);
    return (
        <SectionList
            stickySectionHeadersEnabled={true}
            onScroll={e => {
                if (e.nativeEvent.contentOffset.y <= height && reachedTop) {
                    setReachedTop(false);
                } else if (
                    e.nativeEvent.contentOffset.y > height &&
                    !reachedTop
                ) {
                    setReachedTop(true);
                }
            }}
            onMomentumScrollEnd={e => {
                if (e.nativeEvent.contentOffset.y === 0 && onScrollToEnd) {
                    onScrollToEnd();
                    if (onPressNotItem) onPressNotItem();
                }
            }}
            ListHeaderComponent={() => (
                <ListHeader
                    onPress={() => {
                        if (onPressHeader) onPressHeader();
                        if (onPressNotItem) onPressNotItem();
                    }}
                />
            )}
            sections={[
                {
                    title: headerTitle ? headerTitle : null,
                    data: items
                }
            ]}
            renderItem={({ item }) => (
                <ListItem
                    onPress={() => onPressItem && onPressItem(item)}
                    text={item ? item.name : ''}
                />
            )}
            renderSectionHeader={({ section: { title } }) => (
                <ListSectionHeader shadow={reachedTop} text={title} />
            )}
            keyExtractor={(item, index) =>
                keyExtractor ? keyExtractor(item, index) : String(index)
            }
        />
    );
};

export default SelectionList;
