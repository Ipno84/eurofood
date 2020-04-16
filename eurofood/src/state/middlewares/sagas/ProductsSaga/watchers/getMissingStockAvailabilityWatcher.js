import { GET_MISSING_STOCK_AVAILABILITY } from './../../../../../constants/ProductsConstants';
import getMissingStockAvailabilitySaga from './../actions/getMissingStockAvailabilitySaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getMissingStockAvailabilityWatcher() {
    yield takeLatest(
        GET_MISSING_STOCK_AVAILABILITY,
        getMissingStockAvailabilitySaga
    );
}
