import InfoItem from './../../atoms/Item/InfoItem';
import React from 'react';
import StyledFlatGrid from './styled';
import { screenWidth } from './../../../../constants/ThemeConstants';

const items = [
    {
        icon: 'local-shipping',
        firstRow: 'SPEDIZIONI VELOCI',
        secondRow: 'IN 24/48 ORE'
    },
    {
        icon: 'repeat',
        firstRow: 'RESO GRATUITO SU TUTTI',
        secondRow: 'I PRODOTTI'
    },
    {
        icon: 'credit-card',
        firstRow: 'PAGAMENTI SICURI',
        secondRow: 'ONLINE O ALLA CONSEGNA'
    },
    {
        icon: 'access-time',
        firstRow: 'ORARIO UFFICIO',
        secondRow: '9:00-13:00 / 15:00 - 19:00'
    }
];

const Infoblock = () => {
    return (
        <StyledFlatGrid
            onLayout={e => console.log(e.nativeEvent)}
            itemDimension={screenWidth / 3}
            items={items}
            spacing={8}
            renderItem={({ item }) => (
                <InfoItem
                    icon={item.icon}
                    firstRow={item.firstRow}
                    secondRow={item.secondRow}
                />
            )}
        />
    );
};

export default Infoblock;
