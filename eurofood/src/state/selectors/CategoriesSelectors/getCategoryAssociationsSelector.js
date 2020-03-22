import createCachedSelector from 're-reselect';
import getCategoryItemSelector from './getCategoryItemSelector';

export default createCachedSelector(
    [getCategoryItemSelector, (_, id) => id],
    category => {
        return category ? category.associations : null;
    }
)((_, id) => id);
