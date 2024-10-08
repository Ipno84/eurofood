import CategoryItem from './../../molecules/CategoryItem';
import HorizontalList from './../../atoms/ScrollView/HorizontalList';
import HorizontalScollerContainer from './../../atoms/ScrollView/HorizontalScollerContainer';
import InScreenTitle from './../../atoms/Text/InScreenTitle';
import { ROUTE_NAME_CATEGORY } from '../../../../constants/RouteConstants';
import React from 'react';
import { bevande } from './../../../../assets/images/categories';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const CategoriesHorizontalSelector = ({ categories, title }) => {
    const { push } = useAppNavigation();
    return (
        <HorizontalScollerContainer plainBackground={true} shadow={true}>
            {categories && categories.length > 0 && title ? (
                <InScreenTitle>{title}</InScreenTitle>
            ) : null}
            <HorizontalList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
                renderItem={({ item }) =>
                    item ? (
                        <CategoryItem
                            id={item.id}
                            onPress={() => {
                                if (item) {
                                    push(ROUTE_NAME_CATEGORY, {
                                        id: item.id
                                    });
                                }
                            }}
                            name={item ? item.name : ''}
                        />
                    ) : null
                }
                keyExtractor={(item, index) =>
                    item && item.id ? String(item.id) : String(index)
                }
            />
        </HorizontalScollerContainer>
    );
};

export default CategoriesHorizontalSelector;
