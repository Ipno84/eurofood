import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from './Checkbox';
import CheckboxLabel from './Checkbox/CheckboxLabel';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { Linking } from 'react-native';
import { REGISTER_PSGDPR_ERROR } from './../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterPsgdprSelector from './../../../../state/selectors/ClientSelectors/getRegisterPsgdprSelector';
import setRegisterPsgdprAction from './../../../../state/actions/ClientActions/setRegisterPsgdprAction';

const CheckboxGdpr = () => {
    const dispatch = useDispatch();
    const setRegisterPsgdpr = useCallback(
        psgdpr => dispatch(setRegisterPsgdprAction(psgdpr)),
        [dispatch]
    );
    const psgdpr = useSelector(state => getRegisterPsgdprSelector(state));
    return (
        <View style={{ marginBottom: 16 }}>
            <Checkbox
                value={psgdpr}
                onChange={psgdpr => setRegisterPsgdpr(psgdpr)}>
                <CheckboxLabel>
                    <CheckboxLabel>
                        Dichiaro di aver letto e di accettare le condizioni
                        generali, la politica di riservatezza e le
                    </CheckboxLabel>{' '}
                    <CheckboxLabel
                        isLink={true}
                        onPress={() =>
                            Linking.openURL(
                                'https://www.eurofoodservice.it/content/5-condizioni-registrazione-sito'
                            )
                        }>
                        condizioni di registrazione al sito
                    </CheckboxLabel>
                    {'.'}
                </CheckboxLabel>
            </Checkbox>
            <ErrorMessage errorKey={REGISTER_PSGDPR_ERROR} />
        </View>
    );
};

export default CheckboxGdpr;
