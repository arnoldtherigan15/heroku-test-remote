const router = require('express').Router()
const bookRouter = require('./bookRoutes')

router.use('/books', bookRouter)

module.exports = router