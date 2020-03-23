import { all, call, put } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMissingCategoriesCall from './../../../../../api/calls/CategoriesCalls/getMissingCategoriesCall';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';

export default function* getMissingCategoriesSaga({ ids }) {
    try {
        const res = yield call(getMissingCategoriesCall, ids);
        const categories = arrayToObject(res.categories);
        yield put(setCategoriesItemsAction({ items: categories }));
    } catch (error) {
        console.log(error);
    }
}
