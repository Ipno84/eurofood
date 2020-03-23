export default function arrayToObject(array, keyExtractor = 'id') {
    if (!array) return {};
    return array.reduce((acc, current) => {
        const key = current[keyExtractor];
        const clientCacheTime = Math.floor(Date.now() / 1000);
        acc[key] = {
            ...current,
            clientCacheTime
        };
        return acc;
    }, {});
}
