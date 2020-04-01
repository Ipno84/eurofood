import getCategoriesItemsSelector from './../state/selectors/CategoriesSelectors/getCategoriesItemsSelector';
import getOrdersItemsSelector from './../state/selectors/OrdersSelectors/getOrdersItemsSelector';
import getProductsItemsSelector from './../state/selectors/ProductsSelectors/getProductsItemsSelector';
import onlyUniqueFilter from './onlyUniqueFilter';
import { store } from './../state/store';

let instance = null;

class MissingItemsHelper {
    products = [];
    categories = [];
    orders = [];
    productsTimeout = null;
    categoriesTimeout = null;
    ordersTimeout = null;
    timeoutValue = 500;

    constructor(payload) {
        console.log(instance);
        if (!instance) instance = this;

        if (payload && payload.products) {
            console.log(this.products, payload.products);
            this.products = [...this.products, ...payload.products];
        }

        if (payload && payload.categories) {
            this.categories = [...this.categories, ...payload.categories];
        }

        if (payload && payload.orders) {
            this.orders = [...this.orders, ...payload.orders];
        }

        this.products = this.products.filter(onlyUniqueFilter);
        this.categories = this.categories.filter(onlyUniqueFilter);
        this.orders = this.orders.filter(onlyUniqueFilter);

        if (this.products && this.products.length > 0) {
            this.onMissingProducts();
        }

        if (this.categories && this.categories.length > 0) {
            this.onMissingCategories();
        }

        if (this.orders && this.orders.length > 0) {
            this.onMissingOrders();
        }

        return instance;
    }

    getState() {
        return store.getState();
    }

    getProductItems() {
        const state = this.getState();
        return getProductsItemsSelector(state);
    }

    getCategoryItems() {
        const state = this.getState();
        return getCategoriesItemsSelector(state);
    }

    getOrderItems() {
        const state = this.getState();
        return getOrdersItemsSelector(state);
    }

    getProductItemsId() {
        const items = this.getProductItems();
        return items ? Object.keys(items) : [];
    }

    getCategoryItemsId() {
        const items = this.getCategoryItems();
        return items ? Object.keys(items) : [];
    }

    getOrderItemsId() {
        const items = this.getOrderItems();
        return items ? Object.keys(items) : [];
    }

    getMissingProductsId() {
        const items = this.getProductItemsId();
        let missingProductsId = this.products.filter(e => !items.includes(e));
        return missingProductsId.map(id => String(id)).filter(onlyUniqueFilter);
    }

    getMissingCategoriesId() {
        const items = this.getCategoryItemsId();
        let missingCategoriesId = this.categories.filter(
            e => !items.includes(e)
        );
        return missingCategoriesId
            .map(id => String(id))
            .filter(onlyUniqueFilter);
    }

    getMissingOrdersId() {
        const items = this.getOrderItemsId();
        let missingOrdersId = this.orders.filter(e => !items.includes(e));
        return missingOrdersId.map(id => String(id)).filter(onlyUniqueFilter);
    }

    onMissingProducts() {
        console.log('INIT');
        this.productsTimeout = setTimeout(() => {
            clearTimeout(this.productsTimeout);
            this.productsTimeout = null;
            const missing = this.getMissingProductsId();
            this.products = [];
            console.log(missing);
        }, this.timeoutValue);
    }

    onMissingCategories() {
        console.log(this.categories);
    }

    onMissingOrders() {
        console.log(this.orders);
    }
}

export const MissingItemsHelperInstance = new MissingItemsHelper();

export default MissingItemsHelper;
