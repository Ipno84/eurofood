import PromoCard from './../../molecules/PromoCard';
import { ROUTE_NAME_PROMO } from '../../../../constants/RouteConstants';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import generateArrayOfN from './../../../../helpers/generateArrayOfN';
import useAppNavigation from './../../../../hooks/useAppNavigation';

const PromoCards = () => {
    const { navigate } = useAppNavigation();
    const promoCards = generateArrayOfN(3);
    return (
        <>
            <SectionTitle>Promo</SectionTitle>
            {promoCards.map((promoCard, i) => (
                <PromoCard
                    isFirst={i === 0}
                    key={`promoCard${i}`}
                    text={`Nome promozione ${i + 1}`}
                    buttonLabel="Scopri"
                    onPress={() => navigate(ROUTE_NAME_PROMO)}
                />
            ))}
        </>
    );
};

export default PromoCards;
