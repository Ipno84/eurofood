import createCachedSelector from 're-reselect';
import getCategoryAssociationsSelector from './getCategoryAssociationsSelector';

export default createCachedSelector(
    [getCategoryAssociationsSelector, (_, id) => id],
    associations => {
        return associations && associations.categories
            ? associations.categories.map(e => e.id)
            : null;
    }
)((_, id) => id);
