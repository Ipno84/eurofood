import React from 'react';
import { SafeAreaView } from 'react-native';
import generateTemplate from './../../../../helpers/generateTemplate';

const TEMPLATE = [
    {
        component: 'ScrollView',
        props: {
            contentContainerStyle: {
                paddingBottom: 16,
            },
            children: [
                { component: 'SearchSection' },
                { component: 'HomeBanner' },
                { component: 'CategoriesHorizontalSelector' },
                { component: 'LoginBlock' },
                { component: 'PromoCards' },
                { component: 'Offers' },
                { component: 'SimilarProducts' },
                { component: 'VideoRecipe' },
                {
                    component: 'HorizontalProducts',
                    props: {
                        sectionTitle: 'Bar',
                    },
                },
                {
                    component: 'HorizontalProducts',
                    props: {
                        sectionTitle: 'Ristoranti',
                    },
                },
                {
                    component: 'HorizontalProducts',
                    props: {
                        sectionTitle: 'Pizzerie',
                    },
                },
                {
                    component: 'HorizontalProducts',
                    props: {
                        sectionTitle: 'Hotel',
                    },
                },
                { component: 'Infoblock' },
                {
                    component: 'TopProducts',
                    props: {
                        label: 'Bar - Top 5',
                    },
                },
                {
                    component: 'TopProducts',
                    props: {
                        label: 'Ristoranti - Top 5',
                    },
                },
                { component: 'BestSellers' },
                {
                    component: 'Spacer',
                    props: {
                        top: 24,
                    },
                },
                {
                    component: 'Alert',
                    props: {
                        children: 'Hai raggiuto la fine. continua a esplorare!',
                    },
                },
                {
                    component: 'CategoriesGrid',
                    props: {
                        title: 'SCOPRI LE NOSTRE CATEGORIE',
                    },
                },
            ],
        },
    },
];

const Template = () => (
    <SafeAreaView>{generateTemplate(TEMPLATE)}</SafeAreaView>
);

export default Template;
