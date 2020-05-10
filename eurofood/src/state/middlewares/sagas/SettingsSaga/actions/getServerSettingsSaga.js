import { all, call, put } from 'redux-saga/effects';

import getServerSettingsAction from './../../../../actions/SettingsActions/getServerSettingsAction';
import getServerSettingsCall from './../../../../../api/calls/SettingsCalls/getServerSettingsCall';
import setHomeTemplateAction from './../../../../actions/SettingsActions/setHomeTemplateAction';

export default function* getServerSettingsSaga() {
    try {
        const { server, home } = yield call(getServerSettingsCall);
        yield all([
            put(
                getServerSettingsAction({
                    // TODO: remove static paymentMethods
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
                })
            ),
            put(setHomeTemplateAction({ home }))
        ]);
    } catch (error) {
        alert(error.message);
        yield put(getServerSettingsAction({ error }));
    }
}
