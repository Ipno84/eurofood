import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({
        name: 'React Native Eurofood'
    })
    .useReactNative({
        asyncStorage: false, // there are more options to the async storage.
        networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/
        },
        editor: false, // there are more options to editor
        errors: { veto: stackFrame => false }, // or turn it off with false
        overlay: false // just turning off overlay
    })
    .connect();

global.Reactotron = Reactotron;

export default Reactotron;
