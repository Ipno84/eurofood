import { CommonActions, DrawerActions } from '@react-navigation/native';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';

export default function* onLogoutSaga() {
    try {
        NavigatorRef.reset({
            index: 1,
            routes: [{ name: ROUTE_NAME_HOME }]
        });
        NavigatorRef.closeDrawer();
    } catch (error) {}
}
