import createCachedSelector from 're-reselect';
import getCurrentCartAssociationsCartRowsSelector from './getCurrentCartAssociationsCartRowsSelector';

export default createCachedSelector(
    [getCurrentCartAssociationsCartRowsSelector, (_, id) => id],
    (cartItems, id) => {
        if (!cartItems) return null;
        const item = cartItems.find(
            e => parseInt(e.id_product) === parseInt(id)
        );
        if (item) return item;
        return null;
    }
)((_, id) => id);
