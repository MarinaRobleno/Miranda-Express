const dashboardController = {
    index: (req, res, next) => {
        res.send('Welcome to the dashboard')
    },
    store: (req, res, next) => {
        res.send('Stored data')
    },
    show: (req, res, next) => {
        res.send('Show data')
    },
    update: (req, res, next) => {
        res.send('Update data')
    },
    delete: (req, res, next) => {
        res.send('Delete data')
    }
}

module.exports = dashboardController