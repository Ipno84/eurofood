export default function getServerSettingsCall() {
    const settings = {
        clientCacheDuration: 86400
    };
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(settings);
        }, 1000)
    );
}
