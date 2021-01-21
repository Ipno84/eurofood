import {
    ENDPOINT_SETTINGS,
    HOST,
    PRIVATE_TOKEN
} from './../../../constants/ApiConstants';

import localSettings from './../../../../settings.json';

export default function getServerSettingsCall() {
    const endpoint = [HOST, ENDPOINT_SETTINGS].join('/');
    return fetch(endpoint, {
        headers: {
            Authorization: 'Basic ' + btoa(PRIVATE_TOKEN + ':' + '')
        }
    })
        .then(response => {
            // TODO: remove force local settings
            return localSettings;
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.log(error);
            return localSettings;
        });
}
