import {
    bevande,
    carni,
    condimenti,
    farinePanature,
    latticini,
    noFood,
    noGlutine,
    pane,
    pastaRiso,
    pesce,
    piattiProntiPanini,
    salumi,
    stuzzicherie,
    vegano,
    vegetali,
} from './../../../../assets/images/categories';

import CategoryItem from './../../molecules/CategoryItem';
import HorizontalList from './../../atoms/ScrollView/HorizontalList';
import HorizontalScollerContainer from './../../atoms/ScrollView/HorizontalScollerContainer';
import InScreenTitle from './../../atoms/Text/InScreenTitle';
import React from 'react';

const CategoriesHorizontalSelector = () => {
    const items = [
        { title: 'Bevande', image: bevande },
        { title: 'Carni', image: carni },
        { title: 'Condimenti', image: condimenti },
        { title: 'Farine e Panature', image: farinePanature },
        { title: 'Latticini', image: latticini },
        { title: 'No Food', image: noFood },
        { title: 'No Glutine', image: noGlutine },
        { title: 'Pane', image: pane },
        { title: 'Pasta e Riso', image: pastaRiso },
        { title: 'Pesce', image: pesce },
        { title: 'Piatti Pronti e Panini', image: piattiProntiPanini },
        { title: 'Salumi', image: salumi },
        { title: 'Stuzzicherie', image: stuzzicherie },
        { title: 'Vegano', image: vegano },
        { title: 'Vegetali', image: vegetali },
    ];
    return (
        <HorizontalScollerContainer plainBackground={true} shadow={true}>
            <InScreenTitle>Scegli per categoria</InScreenTitle>
            <HorizontalList
                data={items}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
                renderItem={({ item }) => (
                    <CategoryItem
                        onPress={() => alert(item.title)}
                        image={item.image}
                        title={item.title}
                    />
                )}
                keyExtractor={({ title }) => title}
            />
        </HorizontalScollerContainer>
    );
};

export default CategoriesHorizontalSelector;
