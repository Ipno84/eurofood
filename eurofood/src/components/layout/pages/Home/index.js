import { SafeAreaView, ScrollView } from 'react-native';

import BestSellers from '../../templates/BestSellers';
import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import HomeBanner from '../../templates/HomeBanner';
import HorizontalProducts from '../../organisms/HorizontalProducts';
import LoginBlock from '../../templates/LoginBlock';
import Offers from '../../templates/Offers';
import PromoCards from '../../templates/PromoCards';
import React from 'react';
import SearchSection from '../../organisms/SearchSection';
import SimilarProducts from '../../templates/SimilarProducts';
import SuperOffers from '../../templates/SuperOffers';
import VideoRecipe from '../../organisms/VideoRecipe';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                <SearchSection />
                <HomeBanner />
                <SuperOffers />
                <CategoriesHorizontalSelector />
                <LoginBlock />
                <PromoCards />
                <Offers />
                <SimilarProducts />
                <VideoRecipe />
                <HorizontalProducts sectionTitle="Bar" />
                <HorizontalProducts sectionTitle="Ristoranti" />
                <HorizontalProducts sectionTitle="Pizzerie" />
                <HorizontalProducts sectionTitle="Hotel" />
                <BestSellers />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
