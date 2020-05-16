import { FlatList, Modal, SafeAreaView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bar from './../../../atoms/Bar';
import BarText from './../../../atoms/Bar/BarText';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './../../../atoms/Icon/IconWrapper';
import { REGISTER_ID_STATE_ERROR } from './../../../../../constants/ErrorsConstants';
import SelectButtonText from './../../../atoms/Text/SelectButtonText';
import SelectButtonWrapper from './../../../atoms/Wrapper/SelectButtonWrapper';
import SelectItem from './../../../atoms/Item/SelectItem';
import Separator from './../../../atoms/Spacer/Separator';
import { StateList } from './../../../../../constants/AddressConstants';
import Touchable from './../../../atoms/Button/Touchable';
import { dark } from './../../../../../constants/ThemeConstants';
import getRegisterBusinessTypeDataIdStateSelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataIdStateSelector';
import setRegisterIdStateAction from './../../../../../state/actions/ClientActions/setRegisterIdStateAction';

const SelectIdState = ({
    options = StateList,
    formatOptions = options => Object.keys(options),
    errorKey = REGISTER_ID_STATE_ERROR,
    placeholder = 'Provincia'
}) => {
    const [selectModalOpen, setSelectModalOpen] = useState(false);
    const dispatch = useDispatch();
    const setRegisterIdState = useCallback(
        value => dispatch(setRegisterIdStateAction(value)),
        [dispatch]
    );
    const value = useSelector(state =>
        getRegisterBusinessTypeDataIdStateSelector(state)
    );
    return (
        <>
            <Touchable onPress={() => setSelectModalOpen(true)}>
                <SelectButtonWrapper>
                    <SelectButtonText isSelected={value}>
                        {value && options && options[value]
                            ? options[value]
                            : placeholder}
                    </SelectButtonText>
                    <IconWrapper light={true}>
                        <Icon
                            size={28}
                            name="menu-down"
                            color={dark.toString()}
                        />
                    </IconWrapper>
                </SelectButtonWrapper>
            </Touchable>
            <ErrorMessage errorKey={errorKey} />
            <Modal
                animationType="slide"
                visible={selectModalOpen}
                onRequestClose={() => setSelectModalOpen(false)}>
                <SafeAreaView>
                    <Bar>
                        <BarText>{placeholder}</BarText>
                    </Bar>
                    <FlatList
                        data={formatOptions(options)}
                        renderItem={({ item }) => (
                            <SelectItem
                                id={item}
                                options={options}
                                onPress={() => {
                                    setRegisterIdState(item);
                                    setSelectModalOpen(false);
                                }}
                                isSelected={value === item}
                            />
                        )}
                        keyExtractor={item => item}
                        ItemSeparatorComponent={() => <Separator />}
                    />
                </SafeAreaView>
            </Modal>
        </>
    );
};

export default SelectIdState;
