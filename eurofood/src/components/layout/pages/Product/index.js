import Badge from './Components/Badge';
import BadgeWrapper from './Components/BadgeWrapper';
import PriceContainer from './Components/PriceContainer';
import ProductImage from './Components/ProductImage';
import ProductName from './Components/ProductName';
import ProductNameWrapper from './Components/ProductNameWrapper';
import ProductWrapper from './Components/ProductWrapper';
import React from 'react';
import { SafeAreaView } from 'react-native';
import fixPrice from './../../../../helpers/fixPrice';
import useProductDefaultImage from './../../../../hooks/products/useProductDefaultImage';

const product = {
    id: 95,
    id_category_default: '55',
    id_default_image: '1820',
    quantity: '0',
    type: 'simple',
    unit_price_ratio: '3.000000',
    reference: '432',
    price: '15.540000',
    wholesale_price: '10.000000',
    active: '1',
    name: 'POLPACHEF FINE',
    description:
        '<p>Confezione di Vendita: Barattolo in latta.</p> <p>Peso netto: 4050 gr.</p> <p>T.M.C: 36 mesi.</p> <p>Con 100% pomodoro Italiano.</p> <p>Solo pomodoro fresco.</p> <p>Lavorato in stagione.</p>',
    description_short:
        '<p>POLPA DI POMODORO PREPARATA CON POMODORI MATURI E SELEZIONATI.</p>',
    clientCacheTime: 1584961085
};

const Product = () => {
    const { imageSource, onError } = useProductDefaultImage(product.id);
    const price = fixPrice(product.price, true);
    const wholesale_price = fixPrice(product.wholesale_price, true);
    let discountPercentage = 0;
    if (wholesale_price) {
        const discount = (100 * wholesale_price) / price;
        discountPercentage = Math.round(100 - discount);
    }
    return (
        <SafeAreaView>
            <ProductWrapper>
                <ProductNameWrapper>
                    <ProductName>{product.name}</ProductName>
                </ProductNameWrapper>
                <ProductImage
                    id={product.id}
                    resizeMode="contain"
                    id_default_image={product.id_default_image}
                    onError={onError}
                    source={imageSource}
                    discountComponent={() =>
                        discountPercentage ? (
                            <BadgeWrapper absolute={true}>
                                <Badge>-{discountPercentage}%</Badge>
                            </BadgeWrapper>
                        ) : null
                    }
                />
                <PriceContainer
                    price={price}
                    wholesale_price={wholesale_price}
                    discountPercentage={discountPercentage}
                />
            </ProductWrapper>
        </SafeAreaView>
    );
};

export default Product;
