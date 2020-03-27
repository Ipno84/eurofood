import { CommonActions, DrawerActions } from '@react-navigation/native';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';

export default function* onLogoutSaga() {
    try {
        const navRef = new NavigatorRef();
        navRef.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: ROUTE_NAME_HOME }]
            })
        );
        navRef.navigation.dispatch(DrawerActions.closeDrawer());
    } catch (error) {}
}
