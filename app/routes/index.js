module.exports = {
    childRoutes: [{
        path: '/',
        component: require('Components/www').default,
        childRoutes: [
            require('./demo'),
        ]
    }],
}