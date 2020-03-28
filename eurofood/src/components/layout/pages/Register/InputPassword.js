import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './IconWrapper';
import InputWrapper from './InputWrapper';
import { REGISTER_PASSWORD_ERROR } from './../../../../constants/ErrorsConstants';
import Touchable from './../../atoms/Button/Touchable';
import getRegisterPasswordSelector from './../../../../state/selectors/ClientSelectors/getRegisterPasswordSelector';
import setRegisterPasswordAction from './../../../../state/actions/ClientActions/setRegisterPasswordAction';
import { white } from './../../../../constants/ThemeConstants';

const InputPassword = () => {
    const dispatch = useDispatch();
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const setRegisterPassword = useCallback(
        text => dispatch(setRegisterPasswordAction(text)),
        [dispatch]
    );
    const password = useSelector(state => getRegisterPasswordSelector(state));
    return (
        <>
            <InputWrapper>
                <CardInput
                    onChange={e => setRegisterPassword(e.nativeEvent.text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={secureTextEntry}
                    autoCompleteType="password"
                />
                <Touchable onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <IconWrapper>
                        <Icon
                            size={18}
                            name={
                                secureTextEntry
                                    ? 'eye-outline'
                                    : 'eye-off-outline'
                            }
                            color={white.toString()}
                        />
                    </IconWrapper>
                </Touchable>
            </InputWrapper>
            <ErrorMessage errorKey={REGISTER_PASSWORD_ERROR} />
        </>
    );
};

export default InputPassword;
