class MemberRepository {

	constructor(app) {
		this.Member = app.datasource.models.MEMBER
	}

	async save (data) {
		return await this.Member.create(data)
	}

	async findAll() {
		return await this.Member.findAll({})
	}

	async findById (id) {
		return await this.Member.findOne({
			where: {
				id: id
			}
		})
	}
}

module.exports = MemberRepository
