import React, { useCallback } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CheckBox from './../../atoms/CheckBox';
import CheckboxLabel from './Checkbox/CheckboxLabel';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { REGISTER_NEWSLETTER_ERROR } from './../../../../constants/ErrorsConstants';
import getRegisterNewsletterSelector from './../../../../state/selectors/ClientSelectors/getRegisterNewsletterSelector';
import { orange } from './../../../../constants/ThemeConstants';
import setRegisterNewsletterAction from './../../../../state/actions/ClientActions/setRegisterNewsletterAction';
import styled from 'styled-components/native';

const CheckboxNewsletter = () => {
    const dispatch = useDispatch();
    const setRegisterNewsletter = useCallback(
        () => dispatch(setRegisterNewsletterAction()),
        [dispatch]
    );
    const newsletter = useSelector(state =>
        getRegisterNewsletterSelector(state)
    );
    return (
        <View style={{ marginBottom: 16 }}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#00000000"
                onPress={() => setRegisterNewsletter()}>
                <CheckWrapper>
                    <CheckInner pointerEvents="none">
                        <CheckBox
                            value={newsletter}
                            tintColors={{
                                true: orange.toString(),
                                false: orange.toString()
                            }}
                            onChange={() => null}
                        />
                    </CheckInner>
                    <View style={{ flex: 1, paddingRight: 16 }}>
                        <CheckboxLabel>
                            Iscriviti alla nostra newsletter. Puoi annullare
                            l'iscrizione in ogni momento.
                        </CheckboxLabel>
                    </View>
                </CheckWrapper>
            </TouchableHighlight>
            <ErrorMessage errorKey={REGISTER_NEWSLETTER_ERROR} />
        </View>
    );
};

export default CheckboxNewsletter;

const CheckWrapper = styled.View`
    flex-direction: row;
`;

const CheckInner = styled.View`
    margin-left: 12px;
    margin-right: 8px;
    margin-top: -6px;
`;
