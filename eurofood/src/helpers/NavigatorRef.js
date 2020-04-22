import { CommonActions, StackActions } from '@react-navigation/native';

import { ROUTE_NAME_HOME } from './../constants/RouteConstants';

let instance = null;

class NavigatorRef {
    constructor(ref) {
        if (!instance) instance = this;

        if (ref) this.navigation = ref;

        return instance;
    }

    getCurrentRootState() {
        return this.navigation.getRootState();
    }

    getCurrentRouteName() {
        const rootState = this.getCurrentRootState();
        if (rootState) {
            const mainRoutes = rootState.routes;
            const mainRoute =
                mainRoutes && mainRoutes.length
                    ? mainRoutes[mainRoutes.length - 1]
                    : null;
            if (mainRoute) {
                const routesState = mainRoute.state;
                const routes = routesState.routes;
                const route =
                    routes && routes.length ? routes[routes.length - 1] : null;
                if (route) return route.name;
            }
        }
        return null;
    }

    getPrevRouteName() {
        const rootState = this.getCurrentRootState();
        if (rootState) {
            const mainRoutes = rootState.routes;
            const mainRoute =
                mainRoutes && mainRoutes.length
                    ? mainRoutes[mainRoutes.length - 1]
                    : null;
            if (mainRoute) {
                const routesState = mainRoute.state;
                const routes = routesState.routes;
                const route =
                    routes && routes.length > 1
                        ? routes[routes.length - 2]
                        : null;
                if (route) return route.name;
            }
        }
        return null;
    }

    isCurrentRouteHome() {
        const currentRoute = this.getCurrentRouteName();
        return currentRoute === ROUTE_NAME_HOME;
    }

    pushOrBack(routeName, params) {
        const currentRouteName = this.getCurrentRouteName();
        const prevRouteName = this.getPrevRouteName();
        if (currentRouteName === routeName) return;
        if (prevRouteName === routeName) {
            this.navigation.dispatch(StackActions.pop(1));
        } else {
            this.navigation.dispatch(StackActions.push(routeName, params));
        }
    }

    reset(params) {
        if (params) this.navigation.dispatch(CommonActions.reset(params));
    }
}

export default NavigatorRef;
