import CategoryItem from './../../atoms/Item/CategoryItem';
import Container from './../../atoms/Container';
import { FlatList } from 'react-native';
import { ROUTE_NAME_CATEGORY } from '../../../../constants/RouteConstants';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const CategoriesList = ({ title, items, onEndReached }) => {
    const { navigate } = useAppNavigation();
    return (
        <FlatList
            ListHeaderComponent={() => (
                <Container>
                    <SectionTitle bigger={true}>{title}</SectionTitle>
                </Container>
            )}
            onEndReached={onEndReached}
            contentContainerStyle={{ paddingBottom: 8, marginTop: -16 }}
            data={items}
            renderItem={({ item }) => (
                <CategoryItem
                    image={item.image}
                    name={item.name}
                    onPress={() =>
                        navigate(ROUTE_NAME_CATEGORY, { id: item.id })
                    }
                />
            )}
            keyExtractor={(item, index) =>
                item && item.id ? String(item.id) : String(index)
            }
        />
    );
};

export default CategoriesList;
