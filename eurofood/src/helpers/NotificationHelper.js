import { ONESIGNAL_APP_ID } from '../constants/NotificationsConstants';
import OneSignal from 'react-native-onesignal';

let instance = null;

class NotificationHelper {
    oneSignal = OneSignal;

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    start() {
        this.setLogLevel();
        this.init();
        this.addListeners();
        if (process.env.NODE_ENV === 'development')
            this.oneSignal.sendTag('IS_DEV', '1');
    }

    stop() {
        this.removeListeners();
    }

    setLogLevel(nsLogLevel = 6, visualLogLevel = 0) {
        this.oneSignal.setLogLevel(nsLogLevel, visualLogLevel);
    }

    init() {
        this.oneSignal.init(ONESIGNAL_APP_ID, {
            kOSSettingsKeyAutoPrompt: false,
            kOSSettingsKeyInAppLaunchURL: false,
            kOSSettingsKeyInFocusDisplayOption: 2
        });
        this.inFocusDisplaying();
    }

    inFocusDisplaying(displayOption = 0) {
        this.oneSignal.inFocusDisplaying(displayOption);
    }

    onReceived(notification) {
        // console.log('Notification received: ', notification);
        // const { displayType, isAppInFocus, payload, shown } = notification;
    }

    onOpened(openResult) {
        // console.log('Message: ', openResult.notification.payload.body);
        // console.log('Data: ', openResult.notification.payload.additionalData);
        // console.log('isActive: ', openResult.notification.isAppInFocus);
        // console.log('openResult: ', openResult);
    }

    onIds(device) {
        // console.log('Device info: ', device);
    }

    addIdsListeners() {
        this.oneSignal.addEventListener('ids', this.onIds);
    }

    removeIdsListeners() {
        this.oneSignal.removeEventListener('ids', this.onIds);
    }

    addReceivedListeners() {
        this.oneSignal.addEventListener('received', this.onReceived);
    }

    removeReceivedListeners() {
        this.oneSignal.removeEventListener('received', this.onReceived);
    }

    addOpenedListeners() {
        this.oneSignal.addEventListener('opened', this.onOpened);
    }

    removeOpenedListeners() {
        this.oneSignal.removeEventListener('opened', this.onOpened);
    }

    addListeners() {
        this.addIdsListeners();
        this.addReceivedListeners();
        this.addOpenedListeners();
    }

    removeListeners() {
        this.removeIdsListeners();
        this.removeReceivedListeners();
        this.removeOpenedListeners();
    }
}

const NotificationHelperInstance = new NotificationHelper();

export default NotificationHelperInstance;
