module.exports = {
    project: {
        ios: {},
        android: {} // grouped into "project"
    },
    assets: ['./src/assets/fonts/roboto/'],
    dependencies: {
        'tipsi-stripe': {
            platforms: {
                android: null,
                ios: null
            }
        }
    }
};
