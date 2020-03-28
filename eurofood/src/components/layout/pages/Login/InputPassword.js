import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardInput from './../../atoms/Input/CardInput';
import ErrorMessage from './../../atoms/Text/ErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './IconWrapper';
import InputWrapper from './InputWrapper';
import { LOGIN_PASSWORD_ERROR } from './../../../../constants/ErrorsConstants';
import Touchable from './../../atoms/Button/Touchable';
import getLoginPasswordSelector from './../../../../state/selectors/ClientSelectors/getLoginPasswordSelector';
import setLoginPasswordAction from './../../../../state/actions/ClientActions/setLoginPasswordAction';
import { white } from './../../../../constants/ThemeConstants';

const InputPassword = () => {
    const dispatch = useDispatch();
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const setLoginPassword = useCallback(
        password => dispatch(setLoginPasswordAction(password)),
        [dispatch]
    );
    const password = useSelector(state => getLoginPasswordSelector(state));
    return (
        <>
            <InputWrapper>
                <CardInput
                    value={password}
                    placeholder="Password"
                    autoCompleteType="password"
                    onChange={e => setLoginPassword(e.nativeEvent.text)}
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
            <ErrorMessage errorKey={LOGIN_PASSWORD_ERROR} />
        </>
    );
};

export default InputPassword;
