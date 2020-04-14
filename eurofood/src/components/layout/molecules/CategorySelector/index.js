import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectorIconWrapper from './../../atoms/Selector/SelectorIconWrapper';
import SelectorPlaceholder from './../../atoms/Selector/SelectorPlaceholder';
import SelectorPlaceholderContainer from './../../atoms/Selector/SelectorPlaceholderContainer';
import Styled from './styled';
import Touchable from './../../atoms/Button/Touchable';
import getSearchSelectedCategorySelectorNameSelector from './../../../../state/selectors/SearchSelectors/getSearchSelectedCategorySelectorNameSelector';
import { orange } from './../../../../constants/ThemeConstants';
import setSearchModalVisibilityAction from './../../../../state/actions/SearchActions/setSearchModalVisibilityAction';

const CategorySelector = () => {
    const dispatch = useDispatch();
    const setSearchModalVisibility = useCallback(
        searchModalVisibility =>
            dispatch(setSearchModalVisibilityAction(searchModalVisibility)),
        [dispatch]
    );
    const searchSelectorCategoryName = useSelector(state =>
        getSearchSelectedCategorySelectorNameSelector(state)
    );
    return (
        <Touchable onPress={() => setSearchModalVisibility(true)}>
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
    );
};

export default CategorySelector;
