module.exports = {
    path: 'test',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('Pages/test').default)
        })
    },
}