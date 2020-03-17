import PromoCard from './../../molecules/PromoCard';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import generateArrayOfN from './../../../../helpers/generateArrayOfN';

const PromoCards = () => {
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
                    onPress={() => alert(`Nome promozione ${i + 1}`)}
                />
            ))}
        </>
    );
};

export default PromoCards;
