import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import React from 'react';
import { View } from 'react-native';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const CategorySection = ({ id, navKey, buttonLabel }) => {
    const { navigate } = useAppNavigation();
    return (
        <View>
            <ProductsGrid id={id} />
            <FlatButton
                shadow={true}
                onPress={() => navigate(navKey, { id })}
                darkOrange={true}>
                {buttonLabel}
            </FlatButton>
        </View>
    );
};

export default CategorySection;
