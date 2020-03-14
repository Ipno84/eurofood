import 'react-native-gesture-handler';

import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import setupAxios from './src/api/setupAxios';

setupAxios();

AppRegistry.registerComponent(appName, () => App);
