import createCachedSelector from 're-reselect';
import getCategoryItemSelector from './getCategoryItemSelector';

export default createCachedSelector(
    [getCategoryItemSelector, (_, id) => id],
    category => {
        return category ? category.name : null;
    }
)((_, id) => id);
