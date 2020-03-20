import { Modal, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';

import CategoriesModalSelector from '../CategoriesModalSelector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectorIconWrapper from './../../atoms/Selector/SelectorIconWrapper';
import SelectorPlaceholder from './../../atoms/Selector/SelectorPlaceholder';
import SelectorPlaceholderContainer from './../../atoms/Selector/SelectorPlaceholderContainer';
import Styled from './styled';
import Touchable from './../../atoms/Button/Touchable';
import { orange } from './../../../../constants/ThemeConstants';

const CategorySelector = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <>
            <Touchable onPress={() => setModalVisibility(true)}>
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
            <CategoriesModalSelector
                visibility={modalVisibility}
                setVisibility={setModalVisibility}
            />
        </>
    );
};

export default CategorySelector;
