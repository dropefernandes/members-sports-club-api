const CreateMemberUseCase = require('./createMemberUseCase')

class CreateMemberController {

	constructor(app) {
		this.createMemberUseCase = new CreateMemberUseCase(app)
	}

	execute (req, res) {
		const data = req.body

		return this.createMemberUseCase.handler(data)
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = CreateMemberController