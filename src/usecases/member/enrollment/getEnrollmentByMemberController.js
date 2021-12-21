const GetEnrollmentByMemberUseCase = require('./getEnrollmentByMemberUseCase')

class GetEnrollmentByMemberController {

	constructor(app) {
		this.getEnrollmentByMemberUseCase = new GetEnrollmentByMemberUseCase(app)
	}

	execute (req, res) {
		const { id } = req.params

		return this.getEnrollmentByMemberUseCase.handler(id)
			.then(response => {
				res.status(response.statusCode)
				res.json(response.data)
			})
	}
}

module.exports = GetEnrollmentByMemberController