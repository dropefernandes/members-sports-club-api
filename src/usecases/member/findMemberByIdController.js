const FindMemberByIdUseCase = require('./findMemberByIdUseCase')

class FindMemberByIdController {

	constructor(app) {
		this.findMemberByIdUseCase = new FindMemberByIdUseCase(app)
	}

	execute (req, res) {
		const { id } = req.params

		return this.findMemberByIdUseCase.handler(id)
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = FindMemberByIdController