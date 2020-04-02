import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from './../../organisms/AddressForm';
import AddressesList from './../../organisms/AddressesList';
import PlainButton from './../../atoms/Button/PlainButton';
import ToggleAddressButton from './../../molecules/ToggleAddressButton';
import getSelectedBillingAddressIdSelector from './../../../../state/selectors/CartSelectors/getSelectedBillingAddressIdSelector';
import isBillingAddressFormVisibileSelector from './../../../../state/selectors/CartSelectors/isBillingAddressFormVisibileSelector';
import setSelectedBillingAddressIdAction from './../../../../state/actions/CartActions/setSelectedBillingAddressIdAction';
import showBillingAddressFormAction from './../../../../state/actions/CartActions/showBillingAddressFormAction';

const BillingAddress = () => {
    const dispatch = useDispatch();
    const setSelectedBillingAddressId = useCallback(
        id => dispatch(setSelectedBillingAddressIdAction(id)),
        [dispatch]
    );
    const toggleBillingAddressForm = useCallback(
        () => dispatch(showBillingAddressFormAction()),
        [dispatch]
    );
    const selectedBillingAddressId = useSelector(state =>
        getSelectedBillingAddressIdSelector(state)
    );
    const isBillingAddressFormVisibile = useSelector(state =>
        isBillingAddressFormVisibileSelector(state)
    );
    return (
        <>
            {isBillingAddressFormVisibile ? (
                <AddressForm
                    toggleButton={() => (
                        <ToggleAddressButton
                            onPress={() => toggleBillingAddressForm()}>
                            Scegli indirizzo
                        </ToggleAddressButton>
                    )}
                />
            ) : (
                <>
                    <AddressesList
                        toggleButton={() => (
                            <ToggleAddressButton
                                onPress={() => toggleBillingAddressForm()}>
                                Nuovo indirizzo
                            </ToggleAddressButton>
                        )}
                        onPressAddress={id => setSelectedBillingAddressId(id)}
                        selectedId={selectedBillingAddressId}
                    />
                    <PlainButton>Completa</PlainButton>
                </>
            )}
        </>
    );
};

export default BillingAddress;
