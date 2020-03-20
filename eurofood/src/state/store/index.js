import { applyMiddleware, createStore } from 'redux';

import CacheSaga from './../middlewares/sagas/CacheSaga';
import CategoriesSaga from './../middlewares/sagas/CategoriesSaga';
import SettingsSaga from './../middlewares/sagas/SettingsSaga';
import composeEnhancers from './composeEnhancers';
import createReducer from './createReducer';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
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
        CacheSaga
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

sagaMiddleware.run(combinedSaga);

function* combinedSaga() {
    yield fork(SettingsSaga);
    yield fork(CategoriesSaga);
    yield fork(CacheSaga);
}

export { store, persistor };
