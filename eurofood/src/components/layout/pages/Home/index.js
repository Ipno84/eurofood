import { SafeAreaView, View } from 'react-native';

import Banner from '../../atoms/Banner';
import React from 'react';
import { home } from './../../../../assets/images/banners';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Banner source={home} />
            </View>
        </SafeAreaView>
    );
};

export default Home;
