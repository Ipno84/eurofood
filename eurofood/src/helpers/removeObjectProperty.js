export default function removeObjectProperty(obj, prop) {
    const { [prop]: toRemove, ...rest } = obj;
    return rest;
}
