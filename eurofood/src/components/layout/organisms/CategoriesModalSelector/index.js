import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalSelector from './../../molecules/ModalSelector';
import getMainSectionsSelector from '../../../../state/selectors/CategoriesSelectors/getMainSectionsSelector';
import setSearchSelectedCategoryIdAction from '../../../../state/actions/SearchActions/setSearchSelectedCategoryIdAction';

const CategoriesModalSelector = ({ visibility, setVisibility }) => {
    const dispatch = useDispatch();
    const mainSections = useSelector(state => getMainSectionsSelector(state));
    const setSearchSelectedCategoryId = useCallback(
        id => dispatch(setSearchSelectedCategoryIdAction(id)),
        [dispatch]
    );
    return (
        <ModalSelector
            visibility={visibility}
            setVisibility={setVisibility}
            onPressItem={item => {
                if (item) {
                    setSearchSelectedCategoryId(item.id);
                    setVisibility(false);
                }
            }}
            onPressNotItem={() => {
                setSearchSelectedCategoryId(null);
            }}
            headerTitle="Seleziona una categoria"
            items={mainSections}
            keyExtractor={(item, index) =>
                item ? String(item.id) : String(index)
            }
        />
    );
};

export default CategoriesModalSelector;
