import { applyMiddleware, createStore } from 'redux';

import AddressesSaga from './../middlewares/sagas/AddressesSaga';
import CacheSaga from './../middlewares/sagas/CacheSaga';
import CartSaga from './../middlewares/sagas/CartSaga';
import CategoriesSaga from './../middlewares/sagas/CategoriesSaga';
import ClientSaga from './../middlewares/sagas/ClientSaga';
import ErrorsSaga from './../middlewares/sagas/ErrorsSaga';
import OrdersSaga from './../middlewares/sagas/OrdersSaga';
import ProductsSaga from './../middlewares/sagas/ProductsSaga';
import SearchSaga from './../middlewares/sagas/SearchSaga';
import SettingsSaga from './../middlewares/sagas/SettingsSaga';
import composeEnhancers from './composeEnhancers';
import createReducer from './createReducer';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getAsyncStorageData } from './../../constants/StoreConfig';
import { persistStore } from 'redux-persist';
import rootReducers from './../reducers';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
    let store = createStore(
        createReducer({}),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    let persistor = persistStore(store, null, () => store.getState());

    store.asyncReducers = { ...rootReducers };
    store.injectReducer = (key, asyncReducer) => {
        if (!store.asyncReducers[key]) {
            store.asyncReducers[key] = asyncReducer;
            store.replaceReducer(createReducer(store.asyncReducers));
            persistor.persist();
        }
    };

    store.asyncSagas = {
        SettingsSaga,
        CategoriesSaga,
        ProductsSaga,
        CacheSaga,
        SearchSaga,
        CartSaga,
        ClientSaga,
        ErrorsSaga,
        OrdersSaga,
        AddressesSaga
    };
    store.injectSaga = (key, asyncSaga) => {
        function* combinedSagas() {
            yield fork(asyncSaga);
        }
        if (!store.asyncSagas[key]) {
            store.asyncSagas[key] = asyncSaga;
            sagaMiddleware.run(combinedSagas);
            persistor.persist();
        }
    };

    return { store, persistor };
}
const { store, persistor } = configureStore();

global.purge = () => {
    persistor.purge();
};

sagaMiddleware.run(combinedSaga);

function* combinedSaga() {
    yield fork(SettingsSaga);
    yield fork(CategoriesSaga);
    yield fork(ProductsSaga);
    yield fork(CacheSaga);
    yield fork(SearchSaga);
    yield fork(CartSaga);
    yield fork(ClientSaga);
    yield fork(ErrorsSaga);
    yield fork(OrdersSaga);
    yield fork(AddressesSaga);
}

export { store, persistor };
