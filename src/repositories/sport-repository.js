class SportRepository {

	constructor(app) {
		this.Sport = app.datasource.models.SPORT
	}

	async save (data) {
		return await this.Sport.create(data)
	}

	async findById(id) {
		return await this.Sport.findOne({
			where: {
				id: id
			}
		})
	}

	async findAll() {
		return await this.Sport.findAll({})
	}
}

module.exports = SportRepository
