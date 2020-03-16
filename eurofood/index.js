import 'react-native-gesture-handler';

import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import setupAxios from './src/api/setupAxios';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

setupAxios();

AppRegistry.registerComponent(appName, () => App);
