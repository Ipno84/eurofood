import BackButton from './BackButton';
import MenuButton from './MenuButton';
import React from 'react';

const LeftButton = ({ canGoBack }) => {
    if (canGoBack) return <BackButton />;
    return <MenuButton />;
};

export default LeftButton;
