module.exports = {
    path: 'demo',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('Components/www/demo').default)
        })
    },
}