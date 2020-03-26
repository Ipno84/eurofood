import {
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_CATEGORY_PRODUCTS
} from '../../../../constants/RouteConstants';

import CategoryItem from './../../atoms/Item/CategoryItem';
import Container from './../../atoms/Container';
import { FlatList } from 'react-native';
import Progress from './../../atoms/Progress';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import { orange } from './../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const CategoriesList = ({ title, items, onEndReached, isChunking }) => {
    const { push } = useAppNavigation();
    return (
        <FlatList
            ListHeaderComponent={() => (
                <>
                    <Container>
                        <SectionTitle bigger={true}>{title}</SectionTitle>
                    </Container>
                </>
            )}
            onEndReached={onEndReached}
            contentContainerStyle={{ paddingBottom: 8, marginTop: -16 }}
            data={items}
            renderItem={({ item }) => {
                return (
                    <CategoryItem
                        id={item.id}
                        name={item.name}
                        onPress={() => {
                            if (
                                item.associations &&
                                item.associations.categories
                            ) {
                                push(ROUTE_NAME_CATEGORY, { id: item.id });
                            } else {
                                push(ROUTE_NAME_CATEGORY_PRODUCTS, {
                                    id: item.id
                                });
                            }
                        }}
                    />
                );
            }}
            keyExtractor={(item, index) =>
                item && item.id ? String(item.id) : String(index)
            }
        />
    );
};

export default CategoriesList;
