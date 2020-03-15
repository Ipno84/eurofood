import { SafeAreaView, ScrollView } from 'react-native';

import Banner from '../../atoms/Banner';
import CategorySelector from '../../molecules/CategorySelector';
import React from 'react';
import SearchContainer from '../../atoms/Container/SearchContainer';
import SearchInput from '../../molecules/SearchInput';
import SectionTitle from '../../atoms/Text/SectionTitle';
import { home } from './../../../../assets/images/banners';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchContainer>
                    <SearchInput />
                    <CategorySelector />
                </SearchContainer>
                <Banner source={home} />
                <SectionTitle>Super Offerte</SectionTitle>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
