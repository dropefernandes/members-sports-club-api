class EnrollmentRepository {

	constructor(app) {
		this.Enrollment = app.datasource.models.ENROLLMENT
		this.app = app
	}

	async save (data) {
		return await this.Enrollment.create(data)
	}

	async getByMember (memberId) {

		return await this.Enrollment.findAll({
			where: {
				memberId: memberId
			},
		})
	}
}

module.exports = EnrollmentRepository
