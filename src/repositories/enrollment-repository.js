class EnrollmentRepository {

	constructor(app) {
		this.Enrollment = app.datasource.models.ENROLLMENT
	}

	async save (data) {
		return this.Enrollment.create(data)
	}

	async getByMember (memberId) {

		return await this.Enrollment.findAll({
			where: {
				memberId: memberId
			}
		})
	}
}

module.exports = EnrollmentRepository
