const FindSportByIdUseCase = require('./findSportByIdUseCase')

class FindSportByIdController {

	constructor(app) {
		this.findSportByIdUseCase = new FindSportByIdUseCase(app)
	}

	execute (req, res) {
		const { id } = req.params

		return this.findSportByIdUseCase.handler(id)
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = FindSportByIdController