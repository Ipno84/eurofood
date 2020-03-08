import { Button, SafeAreaView, Text, View } from 'react-native';

import React from 'react';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ padding: 16 }}>
                <Text>Home</Text>
                <Button
                    title="Go to Login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
