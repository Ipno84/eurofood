import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text
          style={{
            marginTop: 8,
            fontSize: 18,
            fontWeight: '400',
            color: '#444',
          }}
        >
          Read the docs to discover what to do next:
        </Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
