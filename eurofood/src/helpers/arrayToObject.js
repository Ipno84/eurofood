export default function arrayToObject(array, keyExtractor = 'id') {
    return array.reduce((acc, current) => {
        const key = current[keyExtractor];
        acc[key] = current;
        return acc;
    }, {});
}
