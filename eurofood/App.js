import { persistor, store } from './src/state/store';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/Navigator';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/constants/ThemeConstants';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <StatusBar barStyle="dark-content" />
                        <Navigator />
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
