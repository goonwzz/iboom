module.exports = {
    path: 'demo',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('Pages/demo').default)
        })
    },
}