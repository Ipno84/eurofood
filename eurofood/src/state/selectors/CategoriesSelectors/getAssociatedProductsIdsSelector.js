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
            const productsId = associations.products.map(e => e.id);
            if (count) return productsId.slice(0, count);
            return productsId;
        }
        return null;
    }
)((state, id, count = 0) => `${id}_${count}`);
