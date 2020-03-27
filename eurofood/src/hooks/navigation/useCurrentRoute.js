import { useNavigationState } from '@react-navigation/native';

export default function useCurrentRoute() {
    const navigationState = useNavigationState(state => state);
    return navigationState.routes[navigationState.index];
}
