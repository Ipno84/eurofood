import { persistor, store } from './src/state/store';
import theme, { lightGray } from './src/constants/ThemeConstants';

import Init from './src/components/containers/Init';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorRef from './src/helpers/NavigatorRef';
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
                    <NavigationContainer ref={ref => new NavigatorRef(ref)}>
                        <StatusBar
                            backgroundColor={lightGray.toString()}
                            barStyle="dark-content"
                        />
                        <Init />
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
