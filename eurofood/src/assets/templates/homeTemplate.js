const Oldtemplate = [
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
                {
                    component: 'PromoCards'
                },
                // {
                //     component: 'SimilarProducts'
                // },
                {
                    component: 'VideoRecipe'
                },
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

export default [
    {
        component: 'VisibilitySensor',
        keyCheck: 'searchSection',
        props: {
            children: [{ component: 'SearchSection' }],
            height: 80,
            skeleton: [{ component: 'SkeletonSearchSection' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'homeBanner',
        props: {
            height: 200,
            children: [{ component: 'HomeBanner' }],
            skeleton: [{ component: 'SkeletonHomeBanner' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'mainSectionsHorizontal',
        props: {
            height: 185,
            children: [{ component: 'MainSectionsHorizontal' }],
            skeleton: [{ component: 'SkeletonMainSectionsHorizontal' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'categorySection_51',
        props: {
            height: 521,
            children: [
                {
                    component: 'CategorySection',
                    props: {
                        id: 51,
                        buttonLabel: 'Scopri tutte le offerte',
                        navKey: 'Category_Products'
                    }
                }
            ],
            skeleton: [{ component: 'SkeletonCategorySection' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'categorySection_86',
        props: {
            height: 521,
            children: [
                {
                    component: 'CategorySection',
                    props: {
                        id: 86,
                        buttonLabel: 'Scopri tutte le super offerte',
                        navKey: 'Category_Products'
                    }
                }
            ],
            skeleton: [{ component: 'SkeletonCategorySection' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'loginBlock',
        props: {
            height: 127,
            children: [
                {
                    component: 'LoginBlock'
                }
            ],
            skeleton: [{ component: 'SkeletonLoginBlock' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'horizontalProducts_100',
        props: {
            height: 266,
            children: [
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 100
                    }
                }
            ],
            skeleton: [{ component: 'SkeletonHorizontalProducts' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'horizontalProducts_101',
        props: {
            height: 266,
            children: [
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 101
                    }
                }
            ],
            skeleton: [{ component: 'SkeletonHorizontalProducts' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'horizontalProducts_102',
        props: {
            height: 266,
            children: [
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 102
                    }
                }
            ],
            skeleton: [{ component: 'SkeletonHorizontalProducts' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'horizontalProducts_103',
        props: {
            height: 266,
            children: [
                {
                    component: 'HorizontalProducts',
                    props: {
                        id: 103
                    }
                }
            ],
            skeleton: [{ component: 'SkeletonHorizontalProducts' }]
        }
    },
    {
        component: 'VisibilitySensor',
        keyCheck: 'infoBlock',
        props: {
            height: 292,
            children: [{ component: 'Infoblock' }],
            skeleton: [{ component: 'SkeletonInfoBlock' }]
        }
    }
];
