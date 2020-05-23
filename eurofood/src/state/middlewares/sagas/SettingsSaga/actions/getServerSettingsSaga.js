import { all, call, put } from 'redux-saga/effects';

import getServerSettingsAction from './../../../../actions/SettingsActions/getServerSettingsAction';
import getServerSettingsCall from './../../../../../api/calls/SettingsCalls/getServerSettingsCall';
import setHomeTemplateAction from './../../../../actions/SettingsActions/setHomeTemplateAction';
import setSelectedCarrierMethodIdAction from '../../../../actions/CheckoutActions/setSelectedCarrierMethodIdAction';
import setSelectedPaymentMethodIdAction from '../../../../actions/CheckoutActions/setSelectedPaymentMethodIdAction';

export default function* getServerSettingsSaga() {
    try {
        const { server, home } = yield call(getServerSettingsCall);
        const actions = [
            put(getServerSettingsAction({ server })),
            put(setHomeTemplateAction({ home }))
        ];
        if (server.carriers) {
            const defaultCarrier = server.carriers.find(e => e.is_default);
            if (defaultCarrier) {
                actions.push(
                    put(setSelectedCarrierMethodIdAction(defaultCarrier.id))
                );
            }
        }
        if (server.paymentMethods) {
            const defaultPayment = server.paymentMethods.find(
                e => e.is_default
            );
            if (defaultPayment) {
                actions.push(
                    put(setSelectedPaymentMethodIdAction(defaultPayment.id))
                );
            }
        }
        yield all(actions);
    } catch (error) {
        yield put(getServerSettingsAction({ error }));
    }
}
