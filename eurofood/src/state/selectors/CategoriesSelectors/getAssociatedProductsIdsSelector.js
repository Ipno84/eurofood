import arrayShuffle from './../../../helpers/arrayShuffle';
import createCachedSelector from 're-reselect';
import getCategoryAssociationsSelector from './getCategoryAssociationsSelector';

export default createCachedSelector(
    [
        getCategoryAssociationsSelector,
        (state, id) => id,
        (state, id, count = 0) => count
    ],
    (associations, id, count) => {
        if (associations && associations.products) {
            const productsId = associations.products
                .map(e => (e && typeof e === 'object' ? e.id : null))
                .filter(e => e);
            if (count) return arrayShuffle(productsId).slice(0, count);
            return productsId;
        }
        return null;
    }
)((state, id, count = 0) => `${id}_${count}`);
