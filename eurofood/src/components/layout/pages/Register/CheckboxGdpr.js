import { Linking, TouchableHighlight, View } from 'react-native';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckBox from './../../atoms/CheckBox';
import CheckboxLabel from './Checkbox/CheckboxLabel';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { REGISTER_PSGDPR_ERROR } from './../../../../constants/ErrorsConstants';
import getRegisterPsgdprSelector from './../../../../state/selectors/ClientSelectors/getRegisterPsgdprSelector';
import { orange } from './../../../../constants/ThemeConstants';
import setRegisterPsgdprAction from './../../../../state/actions/ClientActions/setRegisterPsgdprAction';
import styled from 'styled-components/native';

const CheckboxGdpr = () => {
    const dispatch = useDispatch();
    const setRegisterPsgdpr = useCallback(
        psgdpr => dispatch(setRegisterPsgdprAction(psgdpr)),
        [dispatch]
    );
    const psgdpr = useSelector(state => getRegisterPsgdprSelector(state));
    return (
        <View style={{ marginBottom: 16 }}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#00000000"
                onPress={() => setRegisterPsgdpr()}>
                <CheckWrapper>
                    <CheckInner pointerEvents="none">
                        <CheckBox
                            value={psgdpr}
                            tintColors={{
                                true: orange.toString(),
                                false: orange.toString()
                            }}
                            onChange={() => null}
                        />
                    </CheckInner>
                    <View style={{ flex: 1, paddingRight: 16 }}>
                        <CheckboxLabel>
                            <CheckboxLabel>
                                Dichiaro di aver letto e di accettare le
                                condizioni generali, la politica di riservatezza
                                e le
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
                    </View>
                </CheckWrapper>
            </TouchableHighlight>
            <ErrorMessage errorKey={REGISTER_PSGDPR_ERROR} />
        </View>
    );
};

export default CheckboxGdpr;

const CheckWrapper = styled.View`
    flex-direction: row;
    min-height: 70px;
`;

const CheckInner = styled.View`
    margin-left: 12px;
    margin-right: 8px;
    margin-top: -6px;
`;
