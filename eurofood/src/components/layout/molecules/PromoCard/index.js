import PromoFooter from './../../atoms/Card/Promo/PromoFooter';
import PromoImage from './../../atoms/Card/Promo/PromoImage';
import PromoText from './../../atoms/Card/Promo/PromoText';
import PromoTitle from './../../atoms/Card/Promo/PromoTitle';
import PromoTouchable from './../../atoms/Card/Promo/PromoTouchable';
import PromoWrapper from './../../atoms/Card/Promo/PromoWrapper';
import React from 'react';
import Touchable from './../../atoms/Button/Touchable';
import { promo } from './../../../../assets/images/placeholder';

const PromoCard = ({ text, buttonLabel, onPress, isFirst }) => {
    return (
        <PromoWrapper isFirst={isFirst}>
            <PromoImage resizeMode="cover" source={promo} />
            <PromoFooter>
                <PromoTitle>
                    <PromoText>{text}</PromoText>
                </PromoTitle>
                <Touchable onPress={onPress}>
                    <PromoTouchable>
                        <PromoText isWhite={true}>{buttonLabel}</PromoText>
                    </PromoTouchable>
                </Touchable>
            </PromoFooter>
        </PromoWrapper>
    );
};

export default PromoCard;
