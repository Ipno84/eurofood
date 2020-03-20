import removeObjectProperty from './removeObjectProperty';

export default function purgeObject(objs, expirationTime) {
    Object.values(objs).forEach(obj => {
        if (obj.clientCacheTime <= expirationTime) {
            objs = removeObjectProperty(objs, obj.id);
        }
    });
    return objs;
}
