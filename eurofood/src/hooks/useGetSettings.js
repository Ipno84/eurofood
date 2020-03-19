import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getServerSettingsAction from '../state/actions/SettingsActions/getServerSettingsAction';
import hasServerSettingsSelector from './../state/selectors/SettingsSelectors/hasServerSettingsSelector';

export default function useGetSettings() {
    const dispatch = useDispatch();
    const hasServerSettings = useSelector(state =>
        hasServerSettingsSelector(state)
    );
    console.log(hasServerSettings);
    const getServerSettings = useCallback(
        () => dispatch(getServerSettingsAction()),
        [dispatch]
    );
    useEffect(() => {
        if (!hasServerSettings) getServerSettings();
    }, [hasServerSettings]);
    return hasServerSettings;
}
