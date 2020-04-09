import React, { useCallback } from 'react';

import ButtonSeparator from './ButtonSeparator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderCardButtonText from './OrderCardButtonText';
import OrderCardButtonWrapper from './OrderCardButtonWrapper';
import OrderCardButtonsWrapper from './OrderCardButtonsWrapper';
import OrderCardInfo from './OrderCardInfo';
import OrderCardInner from './OrderCardInner';
import OrderCardTitle from './OrderCardTitle';
import OrderCardWrapper from './OrderCardWrapper';
import { ROUTE_NAME_ORDER } from '../../../../../constants/RouteConstants';
import Touchable from './../../Button/Touchable';
import backorderAction from '../../../../../state/actions/CartActions/backorderAction';
import { orange } from './../../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../../hooks/navigation/useAppNavigation';
import { useDispatch } from 'react-redux';

const formatOrderDate = date => {
    if (date) {
        let justDate = date.split(' ');
        if (justDate && justDate.length) {
            justDate = justDate[0];
            const newDate = new Date(Date.parse(justDate));
            let day = newDate.getDate();
            let month = newDate.getMonth();
            let year = newDate.getFullYear();
            if (isNaN && (isNaN(day) || isNaN(month) || isNaN(year)))
                return date;
            if (day < 10) day = '0' + String(day);
            if (month < 10) month = '0' + String(month);
            return `${day}/${month}/${year}`;
        }
    }
    return date;
};

const OrderStatesMap = {
    1: 'In attesa di pagamento con assegno',
    2: 'Pagamento accettato',
    3: 'Preparazione in corso',
    4: 'Spedito',
    5: 'Consegnato',
    6: 'Annullato',
    7: 'Rimborso',
    8: 'Errore di pagamento',
    9: 'In attesa di rifornimento',
    10: 'In attesa di pagamento con bonifico bancario',
    11: 'Pagamento remoto accettato',
    12: 'In attesa di rifornimento',
    13: 'In attesa verifica contrassegno'
};

const OrderCard = ({ id, reference, date, current_state }) => {
    const dispatch = useDispatch();
    const { navigate } = useAppNavigation();
    const backorder = useCallback(() => dispatch(backorderAction(id)), [
        dispatch
    ]);
    return (
        <OrderCardWrapper>
            <OrderCardInner>
                <OrderCardTitle>Ordine n. {id}</OrderCardTitle>
                <OrderCardInfo>Codice: {reference}</OrderCardInfo>
                <OrderCardInfo>Data: {formatOrderDate(date)}</OrderCardInfo>
                <OrderCardInfo>
                    Stato:{' '}
                    {OrderStatesMap[current_state]
                        ? OrderStatesMap[current_state]
                        : ''}
                </OrderCardInfo>
            </OrderCardInner>
            <OrderCardButtonsWrapper>
                <ButtonSeparator />
                <Touchable onPress={() => navigate(ROUTE_NAME_ORDER, { id })}>
                    <OrderCardButtonWrapper>
                        <Icon
                            size={16}
                            name="card-text-outline"
                            color={orange.toString()}
                        />
                        <OrderCardButtonText>Dettagli</OrderCardButtonText>
                    </OrderCardButtonWrapper>
                </Touchable>
                <Touchable onPress={() => backorder()}>
                    <OrderCardButtonWrapper>
                        <Icon
                            size={16}
                            name="repeat"
                            color={orange.toString()}
                        />
                        <OrderCardButtonText>Riordina</OrderCardButtonText>
                    </OrderCardButtonWrapper>
                </Touchable>
            </OrderCardButtonsWrapper>
        </OrderCardWrapper>
    );
};

export default OrderCard;
