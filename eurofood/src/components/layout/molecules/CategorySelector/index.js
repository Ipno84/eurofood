import React, { useState } from 'react';

import CategoriesModalSelector from './../../organisms/CategoriesModalSelector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectorIconWrapper from './../../atoms/Selector/SelectorIconWrapper';
import SelectorPlaceholder from './../../atoms/Selector/SelectorPlaceholder';
import SelectorPlaceholderContainer from './../../atoms/Selector/SelectorPlaceholderContainer';
import Styled from './styled';
import Touchable from './../../atoms/Button/Touchable';
import getSearchSelectedCategorySelectorNameSelector from './../../../../state/selectors/SearchSelectors/getSearchSelectedCategorySelectorNameSelector';
import { orange } from './../../../../constants/ThemeConstants';
import { useSelector } from 'react-redux';

const CategorySelector = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const searchSelectorCategoryName = useSelector(state =>
        getSearchSelectedCategorySelectorNameSelector(state)
    );
    return (
        <>
            <Touchable onPress={() => setModalVisibility(true)}>
                <Styled>
                    <SelectorPlaceholderContainer>
                        <SelectorPlaceholder>
                            {searchSelectorCategoryName
                                ? searchSelectorCategoryName
                                : 'Scegli per categoria'}
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
