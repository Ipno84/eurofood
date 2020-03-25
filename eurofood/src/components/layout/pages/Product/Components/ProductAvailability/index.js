import { green, red } from '../../../../../../constants/ThemeConstants';

import Badge from './Badge';
import BadgeWrapper from './BadgeWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './IconWrapper';
import InfoWrapper from './InfoWrapper';
import React from 'react';
import isProductAvailableSelector from '../../../../../../state/selectors/ProductsSelectors/isProductAvailableSelector';
import { useSelector } from 'react-redux';

const Availability = ({ id }) => {
    const isProductAvailable = !useSelector(state =>
        isProductAvailableSelector(state, id)
    );
    return (
        <InfoWrapper>
            <BadgeWrapper isProductAvailable={isProductAvailable}>
                <IconWrapper>
                    <Icon
                        name="check-bold"
                        size={16}
                        color={(isProductAvailable ? green : red).toString()}
                    />
                </IconWrapper>
                <Badge isProductAvailable={isProductAvailable}>
                    {isProductAvailable ? 'Disponibile' : 'Non disponibile'}
                </Badge>
            </BadgeWrapper>
        </InfoWrapper>
    );
};

export default Availability;
