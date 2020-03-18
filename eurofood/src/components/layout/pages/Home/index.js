import { SafeAreaView, ScrollView } from 'react-native';

import Alert from '../../atoms/Alert';
import BestSellers from '../../templates/BestSellers';
import CategoriesGrid from '../../templates/CategoriesGrid';
import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import HomeBanner from '../../templates/HomeBanner';
import HorizontalProducts from '../../organisms/HorizontalProducts';
import Infoblock from '../../molecules/Infoblock';
import LoginBlock from '../../templates/LoginBlock';
import Offers from '../../templates/Offers';
import PromoCards from '../../templates/PromoCards';
import React from 'react';
import SearchSection from '../../organisms/SearchSection';
import SimilarProducts from '../../templates/SimilarProducts';
import Spacer from '../../atoms/Spacer';
import SuperOffers from '../../templates/SuperOffers';
import TopProducts from '../../templates/TopProducts';
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
                <Infoblock />
                <TopProducts label="Bar - Top 5" />
                <TopProducts label="Ristoranti - Top 5" />
                <BestSellers />
                <Spacer top={24} />
                <Alert>Hai raggiuto la fine. continua a esplorare!</Alert>
                <CategoriesGrid title="SCOPRI LE NOSTRE CATEGORIE" />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
