import { useNavigation } from '@react-navigation/native';

export default function useAppNavigation() {
    const navigation = useNavigation();
    return {
        replace: navigation.replace,
        push: navigation.push,
        pop: navigation.pop,
        popToTop: navigation.popToTop,
        goBack: navigation.goBack,
        navigate: (name, params) => {
            navigation.navigate(name, params);
        },
        reset: options => {
            navigation.reset(options);
        },
        setParams: options => {
            navigation.setParams(options);
        },
        dispatch: navigation.dispatch,
        isFocused: navigation.isFocused,
        canGoBack: navigation.canGoBack,
        addListener: navigation.addListener,
        removeListener: navigation.removeListener,
        dangerouslyGetParent: navigation.dangerouslyGetParent,
        dangerouslyGetState: navigation.dangerouslyGetState,
        setOptions: navigation.setOptions,
    };
}
