import { getModel } from 'react-native-device-info';
import { isTablet } from 'react-native-device-detection';

const FORCE_TABLET_MODELS = ['SM-J610FN'];

export default function isTabletDevice() {
    const model = getModel();
    return isTablet || FORCE_TABLET_MODELS.includes(model);
}
