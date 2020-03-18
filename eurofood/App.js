import { persistor, store } from './src/state/store';
import theme, { lightGray } from './src/constants/ThemeConstants';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/Navigator';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <StatusBar
                            backgroundColor={lightGray.toString()}
                            barStyle="dark-content"
                        />
                        <Navigator />
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
