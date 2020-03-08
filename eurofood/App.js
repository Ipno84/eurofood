import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/Navigator';
import React from 'react';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Navigator />
        </NavigationContainer>
    );
};

export default App;
