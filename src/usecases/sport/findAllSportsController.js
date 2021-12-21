const FindAllSportsUseCase = require('./findAllSportsUseCase')

class FindAllSportsController {

	constructor(app) {
		this.findAllSportsUseCase = new FindAllSportsUseCase(app)
	}

	execute (req, res) {

		return this.findAllSportsUseCase.handler()
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = FindAllSportsController