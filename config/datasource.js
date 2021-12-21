const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

let database = null

const loadModels = sequelize => {
	const dir = path.join(__dirname, '../src/models')
	const models = []

	fs.readdirSync(dir).forEach(file => {
		const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes)
		models[model.name] = model
	})

	return models
}

module.exports = app => {

	if (!database) {
		const config = app.config
		const sequelize = new Sequelize(
			config.database,
			config.username,
			config.password,
			config
		)

		database = {
			sequelize,
			Sequelize,
			models: {}
		}

		database.models = loadModels(sequelize)
		sequelize.sync().then(() => database)
	}

	return database
}