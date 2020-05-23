import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChooseMethodItemInner from './../../atoms/Item/ChooseMethodItemInner';
import ChooseMethodItemWrapper from './../../atoms/Item/ChooseMethodItemWrapper';
import ChooseMethodWrapper from '../../atoms/Wrapper/ChooseMethodWrapper';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import RadioGroup from '../../atoms/RadioGroup';
import Spacer from './../../atoms/Spacer';
import Totals from '../../molecules/Totals';
import fixPrice from '../../../../helpers/fixPrice';
import getCarrierMethodsSelector from './../../../../state/selectors/SettingsSelectors/getCarrierMethodsSelector';
import getSelectedCarrierMethodIdSelector from './../../../../state/selectors/CheckoutSelectors/getSelectedCarrierMethodIdSelector';
import setSelectedCarrierMethodIdAction from './../../../../state/actions/CheckoutActions/setSelectedCarrierMethodIdAction';

const ShippingMethod = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => getCarrierMethodsSelector(state));
    const selectedCarrierMethodId = useSelector(state =>
        getSelectedCarrierMethodIdSelector(state)
    );
    const setSelectedCarrierMethodId = useCallback(
        id => dispatch(setSelectedCarrierMethodIdAction(id)),
        [dispatch]
    );
    return (
        <>
            <Spacer top={16} />
            <ListHeaderText center={true}>Metodo di spedizione</ListHeaderText>
            <ChooseMethodWrapper>
                <RadioGroup
                    options={items.map(e => ({
                        optionKey: e.id,
                        optionLabels: [
                            e.name,
                            e.delay,
                            e.price === 0
                                ? 'Gratis'
                                : `${fixPrice(
                                      e.price,
                                      true,
                                      2,
                                      true
                                  )} € Iva escl.`
                        ]
                    }))}
                    activeKey={selectedCarrierMethodId}
                    onRadioPress={({ optionKey }) =>
                        setSelectedCarrierMethodId(optionKey)
                    }
                    ItemWrapper={ChooseMethodItemWrapper}
                    ItemInner={ChooseMethodItemInner}
                />
            </ChooseMethodWrapper>
            <Totals />
        </>
    );
};

export default ShippingMethod;
