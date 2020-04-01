import createCachedSelector from 're-reselect';
import getHomeViewbleItemsSelector from './getHomeViewbleItemsSelector';

export default createCachedSelector(
    [getHomeViewbleItemsSelector, (_, key) => key],
    (viewableItems, key) => {
        return viewableItems && viewableItems.indexOf(key) > -1;
    }
)((_, key) => key);
