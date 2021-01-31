import { all, call, put, select } from 'redux-saga/effects';

import getCarriersCall from './../../../../../api/calls/CarriersCalls/getCarriersCall';
import getCurrentCartIdSelector from './../../../../selectors/CartSelectors/getCurrentCartIdSelector';
import getSelectedShippingAddressIdSelector from './../../../../selectors/CartSelectors/getSelectedShippingAddressIdSelector';
import getCarriersAction from '../../../../actions/CarriersActions/getCarriersAction';
import parseCarriers from '../../../../../api/parsing/CarriersParsings/parseCarriers';
import setSelectedCarrierMethodIdAction from '../../../../actions/CheckoutActions/setSelectedCarrierMethodIdAction';

export default function* getCarriersSaga() {
    try {
        const cartId = yield select(getCurrentCartIdSelector);
        const shippingAddressId = yield select(
            getSelectedShippingAddressIdSelector
        );
        const carriers = yield call(getCarriersCall, {
            id_cart: cartId,
            id_address_delivedy: shippingAddressId
        });

        const parsedCarriers = parseCarriers(carriers.carriers);

        let actions = [
            put(getCarriersAction({ success: true }, parsedCarriers))
        ];

        if (parsedCarriers.length > 0) {
            actions.push(
                put(setSelectedCarrierMethodIdAction(parsedCarriers[0].id))
            );
        }

        yield all(actions);
    } catch (error) {
        yield put(getCarriersAction({ error: true }));
    }
}
