import { SafeAreaView, View } from 'react-native';

import Banner from '../../atoms/Banner';
import Container from '../../atoms/Container';
import React from 'react';
import SearchInput from '../../molecules/SearchInput';
import { home } from './../../../../assets/images/banners';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Container>
                    <SearchInput />
                </Container>
                <Banner source={home} />
            </View>
        </SafeAreaView>
    );
};

export default Home;
