import PromoCard from './../../molecules/PromoCard';
import React from 'react';
import generateArrayOfN from './../../../../helpers/generateArrayOfN';

const PromoCards = () => {
    const promoCards = generateArrayOfN(3);
    return promoCards.map((promoCard, i) => (
        <PromoCard
            key={`promoCard${i}`}
            text={`Nome promozione ${i + 1}`}
            buttonLabel="Scopri"
            onPress={() => alert(`Nome promozione ${i + 1}`)}
        />
    ));
};

export default PromoCards;
