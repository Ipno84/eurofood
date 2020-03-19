import LoaderScreen from './../../layout/molecules/LoaderScreen';
import Navigator from './../../../routes/Navigator';
import React from 'react';
import useGetSettings from './../../../hooks/useGetSettings';

const Init = () => {
    const canRenderApp = useGetSettings();
    if (canRenderApp) return <Navigator />;
    return <LoaderScreen />;
};

export default Init;
