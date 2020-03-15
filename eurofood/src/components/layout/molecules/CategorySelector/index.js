import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import SelectorIconWrapper from './../../atoms/Selector/SelectorIconWrapper';
import SelectorPlaceholder from './../../atoms/Selector/SelectorPlaceholder';
import SelectorPlaceholderContainer from './../../atoms/Selector/SelectorPlaceholderContainer';
import SelectorPlaceholderWrapper from './../../atoms/Selector/SelectorPlaceholderWrapper';
import Styled from './styled';
import { orange } from './../../../../constants/ThemeConstants';

const CategorySelector = () => {
    return (
        <Styled>
            <SelectorPlaceholderContainer>
                <SelectorPlaceholderWrapper top={true}>
                    <SelectorPlaceholder>Scegli per</SelectorPlaceholder>
                </SelectorPlaceholderWrapper>
                <SelectorPlaceholderWrapper top={false}>
                    <SelectorPlaceholder>categoria</SelectorPlaceholder>
                </SelectorPlaceholderWrapper>
            </SelectorPlaceholderContainer>
            <SelectorIconWrapper>
                <Icon
                    name="arrow-drop-down"
                    size={36}
                    color={orange.toString()}
                />
            </SelectorIconWrapper>
        </Styled>
    );
};

export default CategorySelector;
