import { all, call, put } from 'redux-saga/effects';

import getServerSettingsAction from './../../../../actions/SettingsActions/getServerSettingsAction';
import getServerSettingsCall from './../../../../../api/calls/SettingsCalls/getServerSettingsCall';
import setHomeTemplateAction from './../../../../actions/SettingsActions/setHomeTemplateAction';
import setSelectedCarrierMethodIdAction from '../../../../actions/CheckoutActions/setSelectedCarrierMethodIdAction';
import setSelectedPaymentMethodIdAction from '../../../../actions/CheckoutActions/setSelectedPaymentMethodIdAction';

/*

Old server settings

server: {
    ...server,
    paymentMethods: [
        {
            module: 'ps_cashondelivery',
            payment: 'Pagamento in contrassegno',
            active: 1
        },
        {
            module: 'stripe_official',
            payment: 'Pagamento con Stripe',
            active: 1
        },
        {
            module: 'ps_checkpayment',
            payment: 'Pagamento con assegno',
            active: 0
        },
        {
            module: 'ps_wirepayment',
            payment: 'Bonifico bancario',
            active: 0
        }
    ]
}
*/

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
        // alert(error.message);
        yield put(getServerSettingsAction({ error }));
    }
}
