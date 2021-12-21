const CreateEnrollmentUseCase = require('./createEnrollmentUseCase')

class CreateEnrollmentController {

	constructor(app) {
		this.createEnrollmentUseCase = new CreateEnrollmentUseCase(app)
	}

	execute (req, res) {
		const data = req.body
		const { id } = req.params

		data.memberId = Number(id)

		return this.createEnrollmentUseCase.handler(data)
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = CreateEnrollmentController