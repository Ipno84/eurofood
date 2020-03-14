import { Button, SafeAreaView, Text, View } from 'react-native';

import React from 'react';
import getCategories from '../../../../api/calls/getCategories';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ padding: 16 }}>
                <Text>Home</Text>
                <Button
                    title="Go to Login"
                    onPress={() =>
                        getCategories()
                            .then(res => console.log(res))
                            .catch(err => console.error(err))
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
