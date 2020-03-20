import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import getMainSectionAction from './../../../../state/actions/CategoriesActions/getMainSectionsAction';
import getMainSectionsSelector from '../../../../state/selectors/CategoriesSelector/getMainSectionsSelector';

const MainSectionsHorizontal = () => {
    const mainSections = useSelector(state => getMainSectionsSelector(state));
    const dispatch = useDispatch();
    const getMainSection = useCallback(() => dispatch(getMainSectionAction()), [
        dispatch
    ]);
    useEffect(() => {
        getMainSection();
    }, []);
    return (
        <CategoriesHorizontalSelector
            title="Scegli per categoria"
            categories={mainSections}
        />
    );
};

export default MainSectionsHorizontal;
