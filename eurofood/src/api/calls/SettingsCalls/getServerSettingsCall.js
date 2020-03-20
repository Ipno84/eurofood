import { ENDPOINT_SETTINGS, HOST } from './../../../constants/ApiConstants';

export default function getServerSettingsCall() {
    const endpoint = [HOST, ENDPOINT_SETTINGS].join('/');
    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data);
}
