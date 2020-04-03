import {
    BASIC_TOKEN,
    ENDPOINT_SETTINGS,
    HOST,
    PRIVATE_TOKEN
} from './../../../constants/ApiConstants';

export default function getServerSettingsCall() {
    const endpoint = [HOST, ENDPOINT_SETTINGS].join('/');
    return fetch(endpoint, {
        headers: {
            Authorization: 'Basic ' + btoa(PRIVATE_TOKEN + ':' + '')
        }
    })
        .then(response => response.json())
        .then(data => data);
}
