const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.listen(PORT, _=> console.log(`listengin on PORT ${PORT}`))
