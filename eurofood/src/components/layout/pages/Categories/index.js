import CategoriesList from './../../templates/CategoriesList';
import React from 'react';
import { SafeAreaView } from 'react-native';
import useMainSections from '../../../../hooks/categories/useMainSections';

const Categories = () => {
    const mainSections = useMainSections();
    return (
        <SafeAreaView>
            <CategoriesList items={mainSections} title="Categorie" />
        </SafeAreaView>
    );
};

export default Categories;
