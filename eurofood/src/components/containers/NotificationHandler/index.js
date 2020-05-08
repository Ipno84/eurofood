import React, { useEffect } from 'react';

import NotificationHelper from './../../../helpers/NotificationHelper';

const NotificationHandler = () => {
    useEffect(() => {
        NotificationHelper.start();
        () => {
            NotificationHelper.stop();
        };
    });
    return null;
};

export default NotificationHandler;
