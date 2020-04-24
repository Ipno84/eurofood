import React, { PureComponent } from 'react';

import Image from './Image';
import Name from './Name';
import NavigatorRef from './../../../../helpers/NavigatorRef';
import Price from './Price';
import ProductWrapper from '../../atoms/Card/ProductWrapper';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import SkeletonProductCard from './SkeletonProductCard';
import Touchable from '../../atoms/Button/Touchable';
import { View } from 'react-native';

class ProductCard extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.goToProduct = this.goToProduct.bind(this);
    }

    goToProduct() {
        NavigatorRef.push(ROUTE_NAME_PRODUCT, { id: this.props.id });
    }

    render() {
        if (!this.props.id) return <SkeletonProductCard />;
        return (
            <View style={{ flex: 1, height: 220 }}>
                <Touchable style={{ flex: 1 }} onPress={this.goToProduct}>
                    <ProductWrapper
                        inHorizontal={this.props.inHorizontal}
                        isFirst={this.props.isFirst}
                        isInRow={this.props.isInRow}>
                        <Image id={this.props.id} />
                        <Name id={this.props.id} />
                        <Price id={this.props.id} />
                    </ProductWrapper>
                </Touchable>
            </View>
        );
    }
}

export default ProductCard;
