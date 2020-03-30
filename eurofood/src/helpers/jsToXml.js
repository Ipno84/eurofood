export default function jsToXml(js) {
    if (!js) return '';
    if (typeof js === 'object') {
        return Object.keys(js)
            .map(item => {
                if (js.constructor === Array) {
                    return Object.keys(js[item])
                        .map(subItem => {
                            return `<${subItem}>${jsToXml(
                                js[item][subItem]
                            )}</${subItem}>`;
                        })
                        .join(' ');
                }
                return `<${item}>${jsToXml(js[item])}</${item}>`;
            })
            .join(' ');
    }
    return js;
}
