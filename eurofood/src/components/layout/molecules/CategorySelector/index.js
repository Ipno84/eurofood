import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import SelectorIconWrapper from './../../atoms/Selector/SelectorIconWrapper';
import SelectorPlaceholder from './../../atoms/Selector/SelectorPlaceholder';
import SelectorPlaceholderContainer from './../../atoms/Selector/SelectorPlaceholderContainer';
import Styled from './styled';
import Touchable from './../../atoms/Button/Touchable';
import { orange } from './../../../../constants/ThemeConstants';

const CategorySelector = () => {
    return (
        <Touchable>
            <Styled>
                <SelectorPlaceholderContainer>
                    <SelectorPlaceholder>
                        Scegli per categoria
                    </SelectorPlaceholder>
                </SelectorPlaceholderContainer>
                <SelectorIconWrapper>
                    <Icon
                        name="arrow-drop-down"
                        size={36}
                        color={orange.toString()}
                    />
                </SelectorIconWrapper>
            </Styled>
        </Touchable>
    );
};

export default CategorySelector;
