import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from '../../organisms/AddressForm';
import { SafeAreaView } from 'react-native';
import getUserIdSelector from './../../../../state/selectors/ClientSelectors/getUserIdSelector';
import resetAddressFormAction from './../../../../state/actions/AddressesActions/resetAddressFormAction';

const EditAddress = () => {
    const dispatch = useDispatch();
    const idUser = useSelector(state => getUserIdSelector(state));
    const resetAddressForm = useCallback(
        () => dispatch(resetAddressFormAction(idUser)),
        [dispatch]
    );
    useEffect(() => {
        return () => {
            resetAddressForm();
        };
    }, []);
    return (
        <SafeAreaView>
            <AddressForm />
        </SafeAreaView>
    );
};

export default EditAddress;
