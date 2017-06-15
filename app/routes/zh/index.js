module.exports = {
    path: 'zh',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('Pages/zh').default)
        })
    },
}