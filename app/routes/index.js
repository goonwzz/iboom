module.exports = {
    childRoutes: [{
        path: '/',
        component: require('Pages/index').default,
        childRoutes: [
            require('./demo'),
        ]
    }],
}