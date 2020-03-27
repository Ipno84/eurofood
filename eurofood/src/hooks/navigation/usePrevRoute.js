import { useNavigationState } from '@react-navigation/native';

export default function usePrevRoute() {
    const navigationState = useNavigationState(state => state);
    if (navigationState.index > 0) {
        return navigationState.routes[navigationState.index - 1];
    }
    return null;
}
