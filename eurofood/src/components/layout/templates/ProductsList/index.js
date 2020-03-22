import { orange, screenWidth } from './../../../../constants/ThemeConstants';

import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../../molecules/ProductCard';
import ProductItem from './../../atoms/Item/ProductItem';
import Progress from './../../atoms/Progress';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const ProductsList = ({ items, onEndReached, isChunking }) => {
    const { navigate } = useAppNavigation();
    return (
        // <FlatList
        //     onEndReached={onEndReached}
        //     contentContainerStyle={{ paddingBottom: 8, marginTop: -16 }}
        //     data={items}
        //     initialNumToRender={10}
        //     maxToRenderPerBatch={10}
        //     updateCellsBatchingPeriod={1000}
        //     removeClippedSubviews={true}
        //     renderItem={({ item, index }) => (
        //         <ProductItem name={`[${index}] - ${item.name}`} id={item.id} />
        //     )}
        //     keyExtractor={(item, index) =>
        //         item && item.id ? String(item.id) : String(index)
        //     }
        //     ListFooterComponent={() =>
        //         isChunking ? <Progress color={orange.toString()} /> : null
        //     }
        // />
        <FlatGrid
            itemContainerStyle={{ paddingTop: 4, marginBottom: -4 }}
            itemDimension={screenWidth / 3}
            onEndReached={onEndReached}
            items={items}
            spacing={8}
            initialNumToRender={6}
            maxToRenderPerBatch={6}
            updateCellsBatchingPeriod={1000}
            removeClippedSubviews={true}
            renderItem={({ item, index }) => {
                return (
                    <ProductCard
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        onPress={() =>
                            navigate(ROUTE_NAME_PRODUCT, { id: item.id })
                        }
                    />
                );
            }}
            ListFooterComponent={() =>
                isChunking ? <Progress color={orange.toString()} /> : null
            }
        />
    );
};

export default ProductsList;
