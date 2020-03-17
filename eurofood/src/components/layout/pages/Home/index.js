import { SafeAreaView, ScrollView } from 'react-native';

import BestSellers from '../../templates/BestSellers';
import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import HomeBanner from '../../templates/HomeBanner';
import LoginBlock from '../../templates/LoginBlock';
import Offers from '../../templates/Offers';
import PromoCards from '../../templates/PromoCards';
import React from 'react';
import SearchSection from '../../organisms/SearchSection';
import SimilarProducts from '../../templates/SimilarProducts';
import SuperOffers from '../../templates/SuperOffers';
import VideoRecipe from '../../templates/VideoRecipe';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchSection />
                <HomeBanner />
                <SuperOffers />
                <CategoriesHorizontalSelector />
                <LoginBlock />
                <PromoCards />
                <Offers />
                <SimilarProducts />
                <VideoRecipe />
                <BestSellers />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
