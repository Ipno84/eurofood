export default function transformParsedHtml(parsedHtml) {
    let template = [];
    if (parsedHtml) {
        template = parsedHtml.filter(e => !e.data || e.data !== '\n');
        template = template.map(e => {
            if (e.type !== 'tag') {
                return {
                    component: ComponentMap['span'],
                    props: {
                        children: e.data
                    }
                };
            }
            if (e.type === 'tag') {
                let componentObj = {
                    component: ComponentMap[e.name],
                    props: {
                        children: transformParsedHtml(e.children)
                    }
                };
                if (
                    e.name === 'img' &&
                    e.attribs &&
                    e.attribs.src &&
                    e.attribs.src.indexOf('./') === -1
                ) {
                    componentObj = {
                        ...componentObj,
                        props: {
                            ...componentObj.props,
                            source: {
                                uri: e.attribs.src
                            },
                            resizeMode: 'contain'
                        }
                    };
                }
                return componentObj;
            }
            return null;
        });
    }
    return template;
}

const ComponentMap = {
    span: 'Span',
    p: 'Paragraph',
    strong: 'Strong',
    img: 'Img',
    ul: 'Ul',
    li: 'Li'
};
