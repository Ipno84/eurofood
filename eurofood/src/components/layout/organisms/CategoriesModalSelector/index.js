import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalSelector from './../../molecules/ModalSelector';
import getMainSectionsSelector from '../../../../state/selectors/CategoriesSelectors/getMainSectionsSelector';
import getSearchModalVisibilitySelector from '../../../../state/selectors/SearchSelectors/getSearchModalVisibilitySelector';
import setSearchModalVisibilityAction from '../../../../state/actions/SearchActions/setSearchModalVisibilityAction';
import setSearchSelectedCategoryIdAction from '../../../../state/actions/SearchActions/setSearchSelectedCategoryIdAction';

const CategoriesModalSelector = () => {
    const dispatch = useDispatch();
    const mainSections = useSelector(state => getMainSectionsSelector(state));
    const searchModalVisibility = useSelector(state =>
        getSearchModalVisibilitySelector(state)
    );
    const setSearchSelectedCategoryId = useCallback(
        id => dispatch(setSearchSelectedCategoryIdAction(id)),
        [dispatch]
    );
    const setSearchModalVisibility = useCallback(
        searchModalVisibility =>
            dispatch(setSearchModalVisibilityAction(searchModalVisibility)),
        [dispatch]
    );
    return (
        <ModalSelector
            visibility={searchModalVisibility}
            setVisibility={setSearchModalVisibility}
            onPressItem={id => setSearchSelectedCategoryId(id)}
            headerTitle="Seleziona una categoria"
            items={[
                {
                    id: -1,
                    name: 'Tutte le categorie'
                },
                ...mainSections
            ]}
        />
    );
};

export default CategoriesModalSelector;
