import PromoFooter from './../../atoms/Card/Promo/PromoFooter';
import PromoImage from './../../atoms/Card/Promo/PromoImage';
import PromoText from './../../atoms/Card/Promo/PromoText';
import PromoTitle from './../../atoms/Card/Promo/PromoTitle';
import PromoTouchable from './../../atoms/Card/Promo/PromoTouchable';
import PromoWrapper from './../../atoms/Card/Promo/PromoWrapper';
import React from 'react';
import { promo } from './../../../../assets/images/placeholder';
import styled from 'styled-components';

const PromoCard = ({ text, buttonLabel, onPress, isFirst }) => {
    return (
        <PromoWrapper isFirst={isFirst}>
            <PromoImage resizeMode="cover" source={promo} />
            <PromoFooter>
                <PromoTitle>
                    <PromoText>{text}</PromoText>
                </PromoTitle>
                <PromoTouchable onPress={onPress}>
                    <PromoText isWhite={true}>{buttonLabel}</PromoText>
                </PromoTouchable>
            </PromoFooter>
        </PromoWrapper>
    );
};

export default PromoCard;
