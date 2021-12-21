const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const config = require('../config/config')
const datasource = require('../config/datasource')

const routes = require('./routes')

const app = express()

app.config = config
app.datasource = datasource(app)

app.set('port', 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))

routes(app)

module.exports = app