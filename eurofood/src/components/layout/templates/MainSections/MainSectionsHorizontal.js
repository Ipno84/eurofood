import CategoriesHorizontalSelector from '../../organisms/CategoriesHorizontalSelector';
import React from 'react';
import { View } from 'react-native';
import useMainSections from '../../../../hooks/categories/useMainSections';

const MainSectionsHorizontal = ({ excludedCategoriesIds = [] }) => {
    const mainSections = useMainSections();
    return (
        <View style={{ marginBottom: -20 }}>
            <CategoriesHorizontalSelector
                title="Scegli per categoria"
                categories={mainSections.filter(e => {
                    const item =
                        typeof e === 'object' ? String(e.id) : String(e);
                    return !excludedCategoriesIds
                        .map(id => String(id))
                        .includes(item);
                })}
            />
        </View>
    );
};

export default MainSectionsHorizontal;
