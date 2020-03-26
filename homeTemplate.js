const template = [
    {
        component: "ScrollView",
        props: {
            contentContainerStyle: {
                paddingBottom: 16
            },
            children: [
                {
                    component: "SearchSection"
                },
                {
                    component: "HomeBanner"
                },
                {
                    component: "MainSectionsHorizontal"
                },
                {
                    component: "CategorySection",
                    props: {
                        id: 51,
                        buttonLabel: "Scopri tutte le offerte",
                        navKey: "Category_Products"
                    }
                },
                {
                    component: "CategorySection",
                    props: {
                        id: 86,
                        buttonLabel: "Scopri tutte le super offerte",
                        navKey: "Category_Products"
                    }
                },
                {
                    component: "LoginBlock"
                },
                {
                    component: "PromoCards"
                },
                // {
                //     component: 'SimilarProducts'
                // },
                {
                    component: "VideoRecipe"
                },
                {
                    component: "HorizontalProducts",
                    props: {
                        id: 100
                    }
                },
                {
                    component: "HorizontalProducts",
                    props: {
                        id: 101
                    }
                },
                {
                    component: "HorizontalProducts",
                    props: {
                        id: 102
                    }
                },
                {
                    component: "HorizontalProducts",
                    props: {
                        id: 103
                    }
                },
                {
                    component: "Infoblock"
                }
                // {
                //     component: 'TopProducts',
                //     props: {
                //         label: 'Bar - Top 5'
                //     }
                // },
                // {
                //     component: 'TopProducts',
                //     props: {
                //         label: 'Ristoranti - Top 5'
                //     }
                // },
                // {
                //     component: 'BestSellers'
                // },
                // {
                //     component: 'Spacer',
                //     props: {
                //         top: 24
                //     }
                // },
                // {
                //     component: 'Alert',
                //     props: {
                //         children:
                //             'Hai raggiuto la fine. continua a esplorare!'
                //     }
                // },
                // {
                //     component: 'CategoriesGrid',
                //     props: {
                //         title: 'SCOPRI LE NOSTRE CATEGORIE'
                //     }
                // }
            ]
        }
    }
];
