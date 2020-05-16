import { FlatList, Modal, SafeAreaView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bar from './../../../atoms/Bar';
import BarText from './../../../atoms/Bar/BarText';
import { CountryList } from './../../../../../constants/AddressConstants';
import ErrorMessage from './../../../atoms/Text/ErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './../../../atoms/Icon/IconWrapper';
import { REGISTER_ID_COUNTRY_ERROR } from './../../../../../constants/ErrorsConstants';
import SelectButtonText from './../../../atoms/Text/SelectButtonText';
import SelectButtonWrapper from './../../../atoms/Wrapper/SelectButtonWrapper';
import SelectItem from './../../../atoms/Item/SelectItem';
import Separator from './../../../atoms/Spacer/Separator';
import Touchable from './../../../atoms/Button/Touchable';
import { dark } from './../../../../../constants/ThemeConstants';
import getRegisterBusinessTypeDataIdCountrySelector from './../../../../../state/selectors/ClientSelectors/getRegisterBusinessTypeDataIdCountrySelector';
import setRegisterIdCountryAction from './../../../../../state/actions/ClientActions/setRegisterIdCountryAction';

const SelectIdCountry = ({
    options = CountryList,
    formatOptions = options => Object.keys(options),
    errorKey = REGISTER_ID_COUNTRY_ERROR,
    placeholder = 'Nazione'
}) => {
    const [selectModalOpen, setSelectModalOpen] = useState(false);
    const dispatch = useDispatch();
    const setRegisterIdCountry = useCallback(
        value => dispatch(setRegisterIdCountryAction(value)),
        [dispatch]
    );
    const value = useSelector(state =>
        getRegisterBusinessTypeDataIdCountrySelector(state)
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
                                    setRegisterIdCountry(item);
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

export default SelectIdCountry;
