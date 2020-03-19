import { createSelector } from 'reselect';
import getServerSettingsSelector from './getServerSettingsSelector';

export default createSelector(
    [getServerSettingsSelector],
    server => server.clientCacheDuration
);
