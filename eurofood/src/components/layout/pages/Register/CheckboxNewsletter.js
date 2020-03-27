import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from './Checkbox';
import CheckboxLabel from './Checkbox/CheckboxLabel';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import { REGISTER_NEWSLETTER_ERROR } from './../../../../constants/ErrorsConstants';
import { View } from 'react-native';
import getRegisterNewsletterSelector from './../../../../state/selectors/ClientSelectors/getRegisterNewsletterSelector';
import setRegisterNewsletterAction from './../../../../state/actions/ClientActions/setRegisterNewsletterAction';

const CheckboxNewsletter = () => {
    const dispatch = useDispatch();
    const setRegisterNewsletter = useCallback(
        newsletter => dispatch(setRegisterNewsletterAction(newsletter)),
        [dispatch]
    );
    const newsletter = useSelector(state =>
        getRegisterNewsletterSelector(state)
    );
    return (
        <View style={{ marginBottom: 16 }}>
            <Checkbox
                value={newsletter}
                onChange={newsletter => setRegisterNewsletter(newsletter)}>
                <CheckboxLabel>
                    Iscriviti alla nostra newsletter. Puoi annullare
                    l'iscrizione in ogni momento.
                </CheckboxLabel>
            </Checkbox>
            <ErrorMessage errorKey={REGISTER_NEWSLETTER_ERROR} />
        </View>
    );
};

export default CheckboxNewsletter;
