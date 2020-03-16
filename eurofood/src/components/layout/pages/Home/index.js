import { SafeAreaView, ScrollView } from 'react-native';

import Banner from '../../atoms/Banner';
import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import PromoCard from '../../molecules/PromoCard';
import React from 'react';
import SearchSection from '../../organisms/SearchSection';
import SectionTitle from './../../atoms/Text/SectionTitle';
import { home } from './../../../../assets/images/banners';
import { product } from './../../../../assets/images/placeholder';

const Home = ({ navigation }) => {
    const products = [
        { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
    ];
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchSection />
                <Banner source={home} />
                <ProductsGrid
                    sectionTitle="Super Offerte"
                    products={products}
                    isHalf={true}
                />
                <FlatButton
                    onPress={() => alert('Scopri tutte le offerte')}
                    darkOrange={true}>
                    Scopri tutte le offerte
                </FlatButton>
                <CategoriesHorizontalSelector />
                <PromoCard
                    text="Nome promozione"
                    buttonLabel="Scopri"
                    onPress={() => alert('Nome promozione')}
                />
                <PromoCard
                    text="Nome promozione"
                    buttonLabel="Scopri"
                    onPress={() => alert('Nome promozione')}
                />
                <PromoCard
                    text="Nome promozione"
                    buttonLabel="Scopri"
                    onPress={() => alert('Nome promozione')}
                />
                <ProductsGrid
                    sectionTitle="Offerte"
                    products={products}
                    isHalf={true}
                />
                <FlatButton
                    onPress={() => alert('Scopri tutte le offerte')}
                    darkOrange={true}>
                    Scopri tutte le offerte
                </FlatButton>
                <ProductsGrid
                    sectionTitle="Simili ai prodotti che hai già acquistato"
                    products={products}
                    isHalf={true}
                />
                <FlatButton
                    onPress={() => alert('Visualizza altri prodotti')}
                    darkOrange={true}>
                    Visualizza altri prodotti
                </FlatButton>
                <FlatButton
                    onPress={() => alert('Scopri la ricetta del giorno')}
                    darkOrange={true}>
                    Scopri la ricetta del giorno
                </FlatButton>
                <ProductsGrid
                    sectionTitle="I piú venduti"
                    products={products}
                    isHalf={true}
                />
                <FlatButton
                    onPress={() => alert('Visualizza altri prodotti')}
                    darkOrange={true}>
                    Visualizza altri prodotti
                </FlatButton>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
