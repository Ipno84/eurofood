import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getServerSettingsAction from '../state/actions/SettingsActions/getServerSettingsAction';
import hasServerSettingsSelector from './../state/selectors/SettingsSelectors/hasServerSettingsSelector';
import isCachePurgedSelector from './../state/selectors/CacheSelectors/isCachePurgedSelector';
import purgeExpiredContentsAction from '../state/actions/CacheActions/purgeExpiredContentsAction';

export default function useGetSettings() {
    const dispatch = useDispatch();
    const hasServerSettings = useSelector(state =>
        hasServerSettingsSelector(state)
    );
    const isCachePurged = useSelector(state => isCachePurgedSelector(state));
    const getServerSettings = useCallback(
        () => dispatch(getServerSettingsAction()),
        [dispatch]
    );
    const purgeExpiredContents = useCallback(
        () => dispatch(purgeExpiredContentsAction()),
        [dispatch]
    );
    useEffect(() => {
        if (!hasServerSettings) getServerSettings();
        if (hasServerSettings && !isCachePurged) purgeExpiredContents();
    }, [hasServerSettings, isCachePurged]);
    return hasServerSettings && isCachePurged;
}
