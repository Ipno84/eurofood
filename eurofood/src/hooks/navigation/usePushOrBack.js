import useAppNavigation from './useAppNavigation';
import useCurrentRoute from './useCurrentRoute';
import usePrevRoute from './usePrevRoute';

export default function usePushOrBack() {
    const prevRoute = usePrevRoute();
    const currentRoute = useCurrentRoute();
    const { goBack, push } = useAppNavigation();
    return (route, params) => {
        if (prevRoute && prevRoute.name === route) {
            goBack();
        } else if (currentRoute.name !== route) {
            push(route, params);
        }
    };
}
