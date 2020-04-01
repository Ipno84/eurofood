import styled, { css } from 'styled-components/native';

import InfoItem from './../../atoms/Item/InfoItem';
import React from 'react';

const itemsChunk = [
    [
        {
            icon: 'local-shipping',
            firstRow: 'SPEDIZIONI VELOCI',
            secondRow: 'IN 24/48 ORE'
        },
        {
            icon: 'repeat',
            firstRow: 'RESO GRATUITO SU TUTTI',
            secondRow: 'I PRODOTTI'
        }
    ],
    [
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
    ]
];

const Infoblock = () => {
    return itemsChunk.map((items, i) => {
        return (
            <Row key={i} isFirst={i === 0}>
                {items.map(item => {
                    return (
                        <InfoItem
                            key={item.icon}
                            icon={item.icon}
                            firstRow={item.firstRow}
                            secondRow={item.secondRow}
                        />
                    );
                })}
            </Row>
        );
    });
};

export default Infoblock;

const Row = styled.View`
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    ${({ isFirst }) =>
        isFirst &&
        css`
            padding-top: 16px;
        `}
`;
