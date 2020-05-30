import './src/polyfills';
import 'react-native-gesture-handler';

import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import setup from './src/setup';

setup();

AppRegistry.registerComponent(appName, () => App);
