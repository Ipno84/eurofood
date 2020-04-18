import Container from './../../atoms/Container';
import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import { screenWidth } from './../../../../constants/ThemeConstants';

const ProductsList = ({ title, items, onEndReached, headerComponent }) => {
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
            // onEndReached={onEndReached}
            items={items}
            spacing={8}
            initialNumToRender={6}
            maxToRenderPerBatch={6}
            // updateCellsBatchingPeriod={1000}
            removeClippedSubviews={true}
            renderItem={({ item }) => {
                if (!item || !item.id) return null;
                return <ProductCard id={item.id} />;
            }}
        />
    );
};

export default ProductsList;
