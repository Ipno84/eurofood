import LoaderScreen from './../../layout/molecules/LoaderScreen';
import Navigator from './../../../routes/Navigator';
import React from 'react';
import useGetSettings from './../../../hooks/useGetSettings';
import useHasToCompleteBusinessRegistration from '../../../hooks/useHasToCompleteBusinessRegistration';

const Init = () => {
    const {
        hasServerSettings,
        isLoadingSettings,
        isCachePurged,
        getServerSettings
    } = useGetSettings();
    useHasToCompleteBusinessRegistration();
    return (
        <>
            <Navigator />
            <LoaderScreen
                hasServerSettings={hasServerSettings}
                isLoadingSettings={isLoadingSettings}
                isCachePurged={isCachePurged}
                getServerSettings={getServerSettings}
            />
        </>
    );
};

export default Init;
