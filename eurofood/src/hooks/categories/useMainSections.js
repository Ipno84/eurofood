import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getMainSectionAction from './../../state/actions/CategoriesActions/getMainSectionsAction';
import getMainSectionsSelector from './../../state/selectors/CategoriesSelectors/getMainSectionsSelector';

export default function useMainSections() {
    const mainSections = useSelector(state => getMainSectionsSelector(state));
    const dispatch = useDispatch();
    const getMainSection = useCallback(() => dispatch(getMainSectionAction()), [
        dispatch
    ]);
    useEffect(() => {
        getMainSection();
    }, []);
    return mainSections;
}
