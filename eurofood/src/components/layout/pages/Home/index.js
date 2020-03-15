import { SafeAreaView, View } from 'react-native';

import Banner from '../../atoms/Banner';
import CategorySelector from '../../molecules/CategorySelector';
import React from 'react';
import SearchContainer from '../../atoms/Container/SearchContainer';
import SearchInput from '../../molecules/SearchInput';
import { home } from './../../../../assets/images/banners';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <SearchContainer>
                <SearchInput />
                <CategorySelector />
            </SearchContainer>
            <View>
                <Banner source={home} />
            </View>
        </SafeAreaView>
    );
};

export default Home;
