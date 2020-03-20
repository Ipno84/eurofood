import { createSelector } from 'reselect';
import getServerSettingsClientCacheDurationSelector from './../SettingsSelectors/getServerSettingsClientCacheDurationSelector';

export default createSelector(
    [getServerSettingsClientCacheDurationSelector],
    clientCacheDuration => Math.floor(Date.now() / 1000 - clientCacheDuration)
);
