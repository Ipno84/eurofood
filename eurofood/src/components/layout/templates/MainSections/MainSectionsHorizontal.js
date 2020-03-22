import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import React from 'react';
import useMainSections from '../../../../hooks/categories/useMainSections';

const MainSectionsHorizontal = () => {
    const mainSections = useMainSections();
    return (
        <CategoriesHorizontalSelector
            title="Scegli per categoria"
            categories={mainSections}
        />
    );
};

export default MainSectionsHorizontal;
