import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import React from 'react';
import useMainSections from '../../../../hooks/categories/useMainSections';
import { View } from 'react-native';

const MainSectionsHorizontal = () => {
    const mainSections = useMainSections();
    return (
        <View style={{ marginBottom: -20 }}>

            <CategoriesHorizontalSelector
                title="Scegli per categoria"
                categories={mainSections}
            />
        </View>
    );
};

export default MainSectionsHorizontal;
