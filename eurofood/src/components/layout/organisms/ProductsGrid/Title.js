import React from 'react';
import SectionTitle from '../../atoms/Text/SectionTitle';
import getCategoryNameSelector from './../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import { useSelector } from 'react-redux';

const Title = ({ id }) => {
    const name = useSelector(state => getCategoryNameSelector(state, id));
    return <SectionTitle>{name}</SectionTitle>;
};

export default Title;
