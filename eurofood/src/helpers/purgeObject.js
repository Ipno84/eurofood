import removeObjectProperty from './removeObjectProperty';

export default function purgeObject(objs, expirationTime) {
    const keys = Object.keys(objs);
    Object.values(objs).forEach((obj, i) => {
        if (obj.clientCacheTime <= expirationTime) {
            objs = removeObjectProperty(objs, obj.id);
        } else if (obj.date <= expirationTime && keys[i]) {
            objs = removeObjectProperty(objs, keys[i]);
        }
    });
    return objs;
}
