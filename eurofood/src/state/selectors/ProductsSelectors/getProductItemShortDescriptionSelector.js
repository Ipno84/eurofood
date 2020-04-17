import createCachedSelector from 're-reselect';
import getProductItemSelector from './getProductItemSelector';
import htmlparser2 from 'htmlparser2-without-node-native';
import transformParsedHtml from './../../../helpers/transformParsedHtml';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        if (!product) return '';
        try {
            const parsed = htmlparser2.parseDOM(product.description_short);
            const template = transformParsedHtml(parsed);
            return template;
        } catch (error) {
            return product.description_short
                .replace(/<\/?[^>]+(>|$)/g, '')
                .replace('<p>', '')
                .replace('</p>', '\n');
        }
    }
)((_, id) => id);
