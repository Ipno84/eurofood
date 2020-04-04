import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import getCategoryNameSelector from './../../../../../../state/selectors/CategoriesSelectors/getCategoryNameSelector';
import styled from 'styled-components/native';
import usePushOrBack from './../../../../../../hooks/navigation/usePushOrBack';
import { useSelector } from 'react-redux';

const Item = ({ prevRoute }) => {
    const pushOrBack = usePushOrBack();
    const name = useSelector(state =>
        getCategoryNameSelector(state, prevRoute.params.id)
    );
    return (
        <TouchableWithoutFeedback
            onPress={() => pushOrBack(prevRoute.name, prevRoute.params)}>
            <Text>{name}</Text>
        </TouchableWithoutFeedback>
    );
};

export default Item;

const Text = styled.Text`
    color: ${({ theme }) => theme.colors.orange(1)};
`;
