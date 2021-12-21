const CreateSportUseCase = require('./createSportUseCase')

class CreateSportController {

	constructor(app) {
		this.createSportUseCase = new CreateSportUseCase(app)
	}

	execute (req, res) {
		const data = req.body

		return this.createSportUseCase.handler(data)
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = CreateSportController