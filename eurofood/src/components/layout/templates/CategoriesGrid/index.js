import {
    bevande,
    carni,
    condimenti,
    latticini,
    pane,
    pastaRiso,
} from './../../../../assets/images/categories';

import CategoryCard from '../../molecules/CategoryCard';
import InScreenTitle from '../../atoms/Text/InScreenTitle';
import React from 'react';
import StyledFlatGrid from './styled';
import TitleWrapper from './TitleWrapper';
import { category } from './../../../../assets/images/placeholder';
import { screenWidth } from './../../../../constants/ThemeConstants';
import styled from 'styled-components/native';

const categories = [
    { title: 'Pane', imageRight: pane, imageLeft: category },
    { title: 'Pasta e Riso', imageRight: pastaRiso, imageLeft: category },
    { title: 'Latticini', imageRight: latticini, imageLeft: category },
    { title: 'Bevande', imageRight: bevande, imageLeft: category },
    { title: 'Carni', imageRight: carni, imageLeft: category },
    { title: 'Condimenti', imageRight: condimenti, imageLeft: category },
];

const CategoriesGrid = ({ title }) => {
    return (
        <>
            <TitleWrapper>
                <InScreenTitle>{title}</InScreenTitle>
            </TitleWrapper>
            <StyledFlatGrid
                itemDimension={screenWidth / 3}
                items={categories}
                spacing={8}
                renderItem={({ item }) => (
                    <CategoryCard
                        title={item.title}
                        imageLeft={item.imageLeft}
                        imageRight={item.imageRight}
                        onPress={() => alert(item.title)}
                    />
                )}
            />
        </>
    );
};

export default CategoriesGrid;
