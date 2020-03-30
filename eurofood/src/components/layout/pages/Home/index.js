import React from 'react';
import { SafeAreaView } from 'react-native';
import generateTemplate from './../../../../helpers/generateTemplate';
import getHomeTemplateSelector from './../../../../state/selectors/SettingsSelectors/getHomeTemplateSelector';
import { useSelector } from 'react-redux';

const template = [
    {
        component: 'ScrollView',
        props: {
            contentContainerStyle: {
                paddingBottom: 16
            },
            children: [
                {
                    component: 'SearchSection'
                },
                {
                    component: 'HomeBanner'
                },
                {
                    component: 'MainSectionsHorizontal'
                },
                {
                    component: 'CategorySection',
                    props: {
                        id: 51,
                        buttonLabel: 'Scopri tutte le offerte',
                        navKey: 'Category_Products'
                    }
                },
                {
                    component: 'CategorySection',
                    props: {
                        id: 86,
                        buttonLabel: 'Scopri tutte le super offerte',
                        navKey: 'Category_Products'
                    }
                },
                {
                    component: 'LoginBlock'
                },
                // {
                //     component: 'PromoCards'
                // },
                // {
                //     component: 'VideoRecipe'
                // },
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 100
                    }
                },
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 101
                    }
                },
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 102
                    }
                },
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 103
                    }
                },
                {
                    component: 'Infoblock'
                }
            ]
        }
    }
];

const Home = () => {
    const templateReal = useSelector(state => getHomeTemplateSelector(state));
    return <SafeAreaView>{generateTemplate(template)}</SafeAreaView>;
};

export default Home;
