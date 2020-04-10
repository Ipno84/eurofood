import {
    ROUTE_NAME_CATEGORY,
    ROUTE_NAME_CATEGORY_PRODUCTS
} from '../../../../constants/RouteConstants';

import CategoryItem from './../../atoms/Item/CategoryItem';
import Container from './../../atoms/Container';
import { FlatList } from 'react-native';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import ViewAll from './../../atoms/Item/CategoryItem/ViewAll';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const CategoriesList = ({
    mainCategoryId,
    title,
    items,
    onEndReached,
    isChunking,
    noAll
}) => {
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
            ListFooterComponent={() => {
                if (noAll) return null;
                return (
                    <ViewAll
                        onPress={() => {
                            push(ROUTE_NAME_CATEGORY_PRODUCTS, {
                                id: mainCategoryId
                            });
                        }}>
                        Tutti i prodotti
                    </ViewAll>
                );
            }}
            keyExtractor={(item, index) =>
                item && item.id ? String(item.id) : String(index)
            }
        />
    );
};

export default CategoriesList;
