import Container from './../../atoms/Container';
import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../../molecules/ProductCard';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import { screenWidth } from './../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const ProductsList = ({
    title,
    items,
    onEndReached,
    isChunking,
    headerComponent
}) => {
    const { navigate } = useAppNavigation();
    return (
        <FlatGrid
            ListHeaderComponent={() => {
                if (headerComponent) return headerComponent();
                if (title)
                    return (
                        <Container>
                            <SectionTitle bigger={true} fix={true}>
                                {title}
                            </SectionTitle>
                        </Container>
                    );
                return null;
            }}
            itemContainerStyle={{ paddingTop: 4, marginBottom: -4 }}
            itemDimension={screenWidth / 3}
            onEndReached={onEndReached}
            items={items}
            spacing={8}
            initialNumToRender={6}
            maxToRenderPerBatch={6}
            updateCellsBatchingPeriod={1000}
            removeClippedSubviews={true}
            renderItem={({ item }) => {
                return (
                    <ProductCard
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        id_default_image={item.id_default_image}
                        onPress={() =>
                            navigate(ROUTE_NAME_PRODUCT, { id: item.id })
                        }
                    />
                );
            }}
        />
    );
};

export default ProductsList;
