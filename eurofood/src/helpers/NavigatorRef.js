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
}

export default NavigatorRef;
