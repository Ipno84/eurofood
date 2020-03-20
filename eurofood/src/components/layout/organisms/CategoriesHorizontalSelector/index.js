import CategoryItem from './../../molecules/CategoryItem';
import HorizontalList from './../../atoms/ScrollView/HorizontalList';
import HorizontalScollerContainer from './../../atoms/ScrollView/HorizontalScollerContainer';
import InScreenTitle from './../../atoms/Text/InScreenTitle';
import { ROUTE_NAME_CATEGORY } from '../../../../constants/RouteConstants';
import React from 'react';
import { bevande } from './../../../../assets/images/categories';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const CategoriesHorizontalSelector = ({ categories, title }) => {
    const { navigate } = useAppNavigation();
    return (
        <HorizontalScollerContainer plainBackground={true} shadow={true}>
            <InScreenTitle>{title}</InScreenTitle>
            <HorizontalList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
                renderItem={({ item }) => (
                    <CategoryItem
                        onPress={() =>
                            navigate(ROUTE_NAME_CATEGORY, { id: item.id })
                        }
                        image={item.image ? item.image : bevande}
                        name={item.name}
                    />
                )}
                keyExtractor={({ id }) => id.toString()}
            />
        </HorizontalScollerContainer>
    );
};

export default CategoriesHorizontalSelector;
