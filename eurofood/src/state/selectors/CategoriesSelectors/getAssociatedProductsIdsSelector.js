import createCachedSelector from 're-reselect';
import getCategoryAssociationsSelector from './getCategoryAssociationsSelector';

export default createCachedSelector(
    [getCategoryAssociationsSelector, (_, id) => id],
    associations => {
        return associations && associations.products
            ? associations.products.map(e => e.id)
            : null;
    }
)((_, id) => id);
