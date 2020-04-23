import LoaderScreen from './../../layout/molecules/LoaderScreen';
import Navigator from './../../../routes/Navigator';
import React from 'react';
import useGetSettings from './../../../hooks/useGetSettings';

const Init = () => {
    const {
        hasServerSettings,
        isLoadingSettings,
        isCachePurged,
        getServerSettings
    } = useGetSettings();
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
